
import { ArrowLeft, Eye, EyeOff, EyeOffIcon } from "lucide-react";
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
        <div className="min-h-screen  w-screen flex flex-col items-center justify-center px-4 bg-[#fbfaff] relative font-jukarta">
            {/* Header Navigation */}
            <div className="max-w-[1330px] w-full fixed top-0 py-8 flex justify-center md:justify-start px-6">
                <div className="flex items-center gap-2">
                    <div className="grid h-6 w-6 grid-cols-2 gap-[2px]">
                        <span className="rounded-[3px] bg-indigo-600" />
                        <span className="rounded-[3px] bg-indigo-400" />
                        <span className="rounded-[3px] bg-indigo-400" />
                        <span className="rounded-[3px] bg-indigo-600" />
                    </div>
                    <h2 className="text-2xl text-slate-900 font-extrabold tracking-tight">ProjectNext</h2>
                </div>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md scale-90 bg-white rounded-xl shadow-xl shadow-indigo-100/50 border border-slate-100 p-10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome!</h1>
                    <p className="text-slate-500 font-medium italic">Hi, there 👋 Ready to dive back in?</p>
                </div>

                {/* Google Button */}
                <button
                    className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 py-3 rounded-md font-bold transition-all hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-95"
                    onClick={googlePopUpLogin}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Sign in with Google
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-8">
                    <div className="flex-1 h-px bg-slate-100"></div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">or use username</p>
                    <div className="flex-1 h-px bg-slate-100"></div>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className=" text-left">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            name="username"
                            required
                            className={`mt-1.5 w-full bg-slate-50 border border-slate-100 rounded-md px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${userNameError ? 'border-red-400 bg-red-50/30' : ''}`}
                        />
                        {userNameError && <p className="text-[11px] font-bold text-red-500 mt-1 ml-1 uppercase tracking-tight">{userNameError}</p>}
                    </div>

                    <div className=" text-left">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                        <div className="relative mt-1.5">
                            <input
                                type={show ? "text" : "password"}
                                placeholder="••••••••"
                                name="password"
                                required
                                className={`w-full bg-slate-50 border border-slate-100 rounded-md px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${passwordError ? 'border-red-400 bg-red-50/30' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                            >
                                {show ? <EyeOffIcon size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {passwordError && <p className="text-[11px] font-bold text-red-500 mt-1 ml-1 uppercase tracking-tight">{passwordError}</p>}
                    </div>

                    <button
                        disabled={isLoading || cooldown > 0}
                        className="w-full bg-indigo-500 hover:bg-indigo-500 text-white py-4 rounded-md font-bold shadow-lg shadow-indigo-100 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
                    >
                        {cooldown > 0 ? `Try again in ${cooldown}s` : "Login to Workspace"}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-indigo-500 transition-all group">
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Return to Homepage
                    </Link>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>
        </div>

    );
}