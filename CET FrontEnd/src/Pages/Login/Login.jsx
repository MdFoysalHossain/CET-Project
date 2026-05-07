
import { Eye, EyeOff } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { SettingsContext } from "../../Context/SettingsProvidor";
import useNotifierError from "../../Hooks/NotifierError";
import { header } from "framer-motion/client";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AccountProvidor";

export default function Login() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()

    const { backEndUrl } = useContext(SettingsContext)
    const { isLoggedIn, accountLoading, setIsLoggedIn, googlePopUpLogin, accountDetails, setAccountDetails, googleSignOut, setAccountLoading } = useContext(AuthContext);


    const [isLoading, setIsLoading] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    const [userNameError, setUsernameError] = useState();
    const [passwordError, setPasswordError] = useState();

    const [loginChecker, setLoginChecker] = useState(false);

    const from = location.state?.from?.pathname || "/Dashboard";

    // console.log("ALL LOCATION:", location, from)


    useEffect(() => {
        if (accountDetails) {
            setIsLoggedIn(true);
            setAccountLoading(false);
            setLoginChecker(true)
        }
    }, [accountDetails, accountLoading, isLoggedIn, setIsLoggedIn, setAccountLoading, setLoginChecker]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(backEndUrl + "/me", {
                credentials: "include"
            });

            const data = await res.json();

            if (data.user) {
                setAccountDetails(data.user);
                setAccountLoading(false);
                setLoginChecker(true)
                // console.log("Fetch User Response:", data.user);
                navigate(from, { replace: true }); // ⭐ move it here
            } else (
                setLoginChecker(null)
            )
        };

        fetchUser();
    }, [backEndUrl, navigate, setAccountDetails, setAccountLoading, setLoginChecker]);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (isLoading || cooldown > 0) return;

        const username = e.target.username.value;
        const password = e.target.password.value;

        const data = {
            loginType: "username",
            username,
            password,
        };

        try {
            setIsLoading(true);

            const response = await fetch(backEndUrl + "/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include" // ⭐ REQUIRED for cookies
            });

            const res = await response.json();

            if (res.message === "Login successful") {
                setAccountDetails(res.user);
                setAccountLoading(false);
                setIsLoggedIn(true);
                setLoginChecker(true);
            }

            if (res.message === "Account disabled. Contact admin.") {
                Swal.fire({
                    html: `
                            <div class="flex flex-col items-center text-center w-full">
            
                                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        class="w-6 h-6 text-red-500" 
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                            d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </div>
            
                                <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                                    Account Disabled
                                </h2>
            
                                <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                    Your account has been disabled. Please contact your administrator.
                                </p>
            
                            </div>
                        `,
                    width: "400px",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    customClass: {
                        popup: "rounded-2xl p-8"
                    }
                });
            }

            if (res.message === "invalid username") {
                setUsernameError("Invalid username");
            } else {
                setUsernameError("");
            }

            if (res.message === "invalid password") {
                setPasswordError("Password did not match");

            } else {
                setPasswordError("");
            }

            if (response.ok) {
                Swal.fire({
                    html: `
                                        <div class="flex flex-col items-center text-center w-full">
                
                                            <!-- Success Icon -->
                                            <div class="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-500/10 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" 
                                                    class="w-6 h-6 text-emerald-500" 
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                        d="M5 13l4 4L19 7"/>
                                                </svg>
                                            </div>
                
                                            <!-- Title -->
                                            <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                                                Login Successful
                                            </h2>
                
                                            <!-- Text -->
                                            <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                                Logged In Successfully, Redirecting to Dashboard...
                                            </p>
                
                                        </div>
                                    `,

                    width: "400px",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,

                    customClass: {
                        popup: "rounded-2xl p-8"
                    }
                });
                navigate("/Dashboard")
            }



            // if failed → trigger cooldown
            if (!response.ok) {
                setCooldown(5); // 5 seconds lock
                const interval = setInterval(() => {
                    setCooldown((prev) => {
                        if (prev <= 1) {
                            clearInterval(interval);
                            return 0;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (loginChecker === false || accountLoading) {
        return (
            <div className="fixed inset-0 bg-white/75 backdrop-blur-sm flex items-center justify-center z-50">
                <span className="loading text-indigo-500 loading-infinity loading-xl scale-200"></span>
            </div>
        );
    } else if (
        loginChecker &&
        accountLoading === false &&
        accountDetails &&
        Object.keys(accountDetails).length !== 0
    ) {
        // console.log("Login Checker True - Navigating to Dashboard");
        // navigate("/Dashboard");
        navigate(from, { replace: true });
    }


    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative">
            <div className="w-[1330px] mx-auto h-15 fixed top-0 flex mt-5">
                <h2 className="text-2xl font-jukarta text-center mb-5 text-indigo-500 font-bold">TrackLio</h2>
            </div>

            {/* Main Container */}
            <div className="w-100 rounded-xl p-8">

                {/* Login Card */}

                <div className="max-w-md mx-auto text-center">
                    <div className="flex justify-center items-end ">
                        {/* <h2 className="text-2xl uppercase font-semibold text-gray-800 font-jukarta text-left">Login</h2> */}
                        <p className="text-md text-gray-700 font-semibold mt-1 font-jukarta text-left">
                            Hi, There 👋
                        </p>
                    </div>

                    {/* Google Button */}
                    <button className="btn shadow-none bg-white  text-black border-[#e5e5e5] w-full mt-5" onClick={googlePopUpLogin} >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <p className="text-xs text-gray-400">or Login with Username</p>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Form */}
                    <form className="text-left space-y-4" onSubmit={handleLogin}>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-600">Username</label>
                            <input
                                type="text"
                                placeholder="Type your username"
                                name="username"
                                required
                                className={`mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${userNameError ? 'border-red-500' : ''}`}
                            />
                            <label htmlFor="username" className="text-sm text-red-500">
                                {userNameError}
                            </label>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <div className="relative mt-1">
                                <input
                                    type={show ? "text" : "password"}
                                    placeholder="Enter your password"
                                    name="password"
                                    required
                                    className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${passwordError ? 'border-red-500' : ''}`}
                                />
                                <label htmlFor="password" className="text-sm text-red-500">
                                    {passwordError}
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="absolute right-2 top-2.5 text-gray-400"
                                >
                                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-xs  text-indigo-500 border border-indigo-500" />
                                Remember Me
                            </label>


                        </div>

                        {/* Login Button */}
                        <button disabled={isLoading || cooldown > 0} className="w-full bg-indigo-500 hover:bg-indigo-600 *:hover:scale-105 font-jakarta cursor-pointer text-white py-1.5 rounded-md transition-transform  font-semibold">
                            <p className="transition">{cooldown > 0 ? `Try again in ${cooldown}s` : "Login"}</p>
                        </button>
                    </form>
                    <Link to="/" className="text-indigo-600 cursor-pointer hover:underline text-right block mt-4 text-sm">
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
}