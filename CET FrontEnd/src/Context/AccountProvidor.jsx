import React, { createContext, use, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase_init';
import { SettingsContext } from './SettingsProvidor';
import { flushSync } from 'react-dom';

export const AuthContext = createContext();

const AccountProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const { backEndUrl } = useContext(SettingsContext)


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accountDetails, setAccountDetails] = useState({});
    const [accountLoading, setAccountLoading] = useState(true);
    const [sessionChecked, setSessionChecked] = useState(false);

    useEffect(() => {
        setAccountLoading(true)
        const fetchUser = async () => {
            try {
                const response = await fetch(backEndUrl + "/me", {
                    method: "GET",
                    credentials: "include"
                });

                const data = await response.json();



                if (data.user) {
                    setAccountDetails(data.user);
                    setIsLoggedIn(true);
                    setAccountLoading(false)
                } else {
                    setIsLoggedIn(false);
                    setAccountLoading(false)
                }
            } finally {
                setAccountLoading(false);
            }
        };

        fetchUser();
    }, [backEndUrl, setAccountDetails, setIsLoggedIn]);


    const googlePopUpLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const email = result.user.email;

            setIsLoggedIn(true);
            setAccountDetails(user);

            // 🔑 Get token (important for backend security)
            const token = await user.getIdToken();

            fetch(backEndUrl + "/checkUser?email=" + email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }

            })

                .then(res => res.json())
                .then(res => {
                    // console.log("Check User Res:", res)
                })

            // navigate("/Dashboard") // Redirect to dashboard after login



        } catch (error) {
            console.log("Google Login Error:", error);
        }
    };

    // const googleSignOut = () => {
    //     signOut(auth).then(() => {
    //         setAccountDetails({})
    //         setIsLoggedIn(false)
    //         setAccountLoading(false)
    //     }).catch((error) => {
    //         console.log("Google Sign out Error: ", error)
    //     })
    // }

    // useEffect(() => {
    //     setAccountLoading(true);

    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         flushSync(() => {
    //             setAccountDetails(user);
    //             setIsLoggedIn(!!user);
    //         });
    //         setAccountLoading(false); // guaranteed after accountDetails is committed
    //     });

    //     return () => unsubscribe();
    // }, []);


    const googleSignOut = () => {
        signOut(auth).catch((error) => {
            console.log("Google Sign out Error: ", error);
        });
    };

    useEffect(() => {
        setAccountLoading(true);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            flushSync(() => {
                setAccountDetails(user); // null on sign out
                setIsLoggedIn(!!user);   // false on sign out
            });
            setAccountLoading(false);
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
            setAccountLoading,
            setSessionChecked,
            sessionChecked
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AccountProvider;