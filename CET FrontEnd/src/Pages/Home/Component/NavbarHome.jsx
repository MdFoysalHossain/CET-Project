// import React from "react";
// import { Link } from "react-router";

// const NavbarHome = () => {

//     const Links = [
//         { name: "Home", to: "#Banner" },
//         { name: "Features", to: "#Features" },
//         { name: "Price", to: "#Price" },
//         { name: "Contact Us", to: "#Contact" },
//     ]

//     return (
//         <nav className=" fixed top-0 z-[1000] w-full border-b border-gray-200 bg-white px-6 py-3">
//             <div className="mx-auto flex max-w-[1330px] items-center justify-between">
//                 <div className="flex items-center gap-10">
//                     <div className="flex items-center gap-2">
//                         <div className="grid h-5 w-5 grid-cols-2 gap-[2px]">
//                             <span className="rounded-sm bg-indigo-600" />
//                             <span className="rounded-sm bg-indigo-400" />
//                             <span className="rounded-sm bg-indigo-400" />
//                             <span className="rounded-sm bg-indigo-600" />
//                         </div>
//                         <span className="text-2xl text-gray-900 font-jukarta font-bold relative">
//                             TrackLio
//                             <p className="h-1.75 w-1.75 rounded-full bg-indigo-500 absolute bottom-1.25 -right-2.25"></p>
//                         </span>
//                     </div>


//                 </div>
//                 <div className="hidden items-center gap-10 text-sm text-gray-700  md:flex">
//                     {
//                         Links.map((link, key) => (
//                             <button
//                                 key={key}
//                                 className="
//                                     relative cursor-pointer text-[14px] font-semibold font-jukarta
//                                     transition-all duration-300
//                                     hover:text-indigo-600 hover:scale-110

//                                     after:content-['']
//                                     after:absolute
//                                     after:left-1/2
//                                     after:-bottom-1
//                                     after:h-[2px]
//                                     after:w-full
//                                     after:bg-indigo-600
//                                     after:-translate-x-1/2
//                                     after:scale-x-0
//                                     after:origin-center
//                                     after:transition-transform
//                                     after:duration-300

//                                     hover:after:scale-x-100
//                                 "
//                             >
//                                 {link.name}
//                             </button>
//                         ))
//                     }
//                 </div>

//                 <div className="hidden items-center gap-3 md:flex font-jukarta">
//                     {/* <Link to={"/Dashboard"} className="rounded-md font-jukarta cursor-pointer border text-indigo-600 font-semibold border-indigo-500 px-8 py-2 text-sm   transition-colors hover:bg-indigo-500 hover:text-white">
//                         Dashboard
//                     </Link> */}
//                     <Link to={"/Login"} className="rounded-md cursor-pointer bg-indigo-500 px-8 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600">
//                         Start Free
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavbarHome;





import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

const NavbarHome = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Toggle scroll background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll handler
    const handleScrollTo = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsOpen(false); // Close mobile menu
        }
    };

    const Links = [
        { name: "Home", to: "#Banner" },
        { name: "Features", to: "#Features" },
        { name: "Price", to: "#Price" },
        { name: "Contact Us", to: "#Contact" },
    ];

    return (
        <nav 
            className={`fixed top-0 z-[1000] w-full transition-all duration-300 px-6 ${
                scrolled || isOpen
                ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3" 
                : "bg-transparent py-5"
            }`}
        >
            <div className="mx-auto flex max-w-[1330px] items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-2 group cursor-pointer z-[1001]">
                    <div className="grid h-6 w-6 grid-cols-2 gap-[2px] transition-transform group-hover:rotate-12">
                        <span className="rounded-[3px] bg-indigo-600" />
                        <span className="rounded-[3px] bg-indigo-400" />
                        <span className="rounded-[3px] bg-indigo-400" />
                        <span className="rounded-[3px] bg-indigo-600" />
                    </div>
                    <span className="text-xl md:text-2xl text-slate-900 font-jukarta font-extrabold tracking-tight relative">
                        TrackLio
                        <span className="h-2 w-2 rounded-full bg-indigo-500 absolute -bottom-1 -right-3 border-2 border-white shadow-sm animate-pulse"></span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {Links.map((link, key) => (
                        <a
                            href={link.to}
                            key={key}
                            onClick={(e) => handleScrollTo(e, link.to)}
                            className="relative cursor-pointer text-[15px] font-bold text-slate-600 font-jukarta transition-all duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA Actions & Hamburger */}
                <div className="flex items-center gap-4 font-jukarta z-[1001]">
                    <Link 
                        to="/Login" 
                        className="hidden sm:block text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors mr-2"
                    >
                        Sign In
                    </Link>
                    <Link 
                        to="/Login" 
                        className="rounded-xl bg-indigo-600 px-5 md:px-7 py-2 md:py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700 hover:-translate-y-0.5"
                    >
                        Start Free
                    </Link>
                    
                    {/* Mobile Toggle Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out origin-top ${
                isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
            }`}>
                <div className="flex flex-col p-6 space-y-4">
                    {Links.map((link, key) => (
                        <a
                            href={link.to}
                            key={key}
                            onClick={(e) => handleScrollTo(e, link.to)}
                            className="text-lg font-bold text-slate-600 hover:text-indigo-600 flex justify-between items-center group"
                        >
                            {link.name}
                            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </a>
                    ))}
                    <hr className="border-slate-100 my-2" />
                    <Link 
                        to="/Login"
                        onClick={() => setIsOpen(false)}
                        className="text-center font-bold text-slate-400 hover:text-slate-900 py-2"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarHome;