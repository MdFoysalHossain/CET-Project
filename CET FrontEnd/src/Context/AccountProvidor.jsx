import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase_init';
import { SettingsContext } from './SettingsProvidor';

export const AuthContext = createContext();

const AccountProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const { backEndUrl } = useContext(SettingsContext)


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accountDetails, setAccountDetails] = useState({});
    const [accountLoading, setAccountLoading] = useState(true);

    const googlePopUpLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const email = result.user.email;

            setIsLoggedIn(true);
            setAccountDetails(user);

            // 🔑 Get token (important for backend security)
            const token = await user.getIdToken();

            console.log(backEndUrl + "/checkUser?email=" + email)

            fetch(backEndUrl + "/checkUser?email=" + email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }

            })

            .then(res => res.json())
            .then(res => {
                console.log("Check User Res:", res)
            })



        } catch (error) {
            console.log("Google Login Error:", error);
        }
    };

    const googleSignOut = () => {
        signOut(auth).then(() => {
            setAccountDetails({})
            setIsLoggedIn(false)
        }).catch((error) => {
            console.log("Google Sign out Error: ", error)
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAccountLoading(true)
            setAccountDetails(user);
            user ? setIsLoggedIn(true) : setIsLoggedIn(false);
            setAccountLoading(false)

        });

        return () => unsubscribe();
    }, []);



    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            accountDetails,
            setAccountDetails,
            googlePopUpLogin,
            googleSignOut,
            accountLoading,
            setAccountLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AccountProvider;