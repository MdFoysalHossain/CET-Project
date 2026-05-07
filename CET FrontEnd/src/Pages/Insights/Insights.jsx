import { ChevronLeft, Download, FileText, Sheet, Table2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import SingleInsight from './Components/SingleInsight';

const Insights = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const [insights, setInsights] = useState([

        {
            date: "09 May 2026, 24:30:30 Am",
            name: "Foysal Hossain",
            username: "foysalhossain",
            loggedTo: "foysalhossain",
            event: "Veniam itaque eveniet illum porro ducimus unde alias minus perferendis, quae minima.",
            project: "bKash App Redesign"
        },
        {
            date: "13 May 2026, 13:30:30 Am",
            name: "Easeen Hasan",
            username: "easeenhasan",
            loggedTo: "foysalhossain",
            event: "Implemented authentication flow with OTP verification and improved security layer.",
            project: "Nagad App Backend Integration"
        },
        {
            date: "14 May 2026, 10:15:12 Am",
            name: "Rafiul Karim",
            username: "rafiulkarim",
            loggedTo: "foysalhossain",
            event: "Fixed critical bug in payment gateway response handling.",
            project: "Rocket Payment System"
        },
        {
            date: "15 May 2026, 09:45:00 Am",
            name: "Nusrat Jahan",
            username: "nusratjahan",
            loggedTo: "foysalhossain",
            event: "Optimized database queries to reduce API response time by 35%.",
            project: "User Analytics Dashboard"
        },
        {
            date: "16 May 2026, 18:20:45 Am",
            name: "Tanvir Ahmed",
            username: "tanvirahmed",
            loggedTo: "foysalhossain",
            event: "Designed new responsive UI components for mobile banking app.",
            project: "bKash UI Revamp"
        },
        {
            date: "17 May 2026, 14:05:33 Am",
            name: "Sadia Islam",
            username: "sadiaislam",
            loggedTo: "foysalhossain",
            event: "Integrated email notification service for transaction alerts.",
            project: "Notification Service Upgrade"
        },
        {
            date: "18 May 2026, 11:30:10 Am",
            name: "Imran Hossain",
            username: "imranhossain",
            loggedTo: "foysalhossain",
            event: "Refactored legacy codebase and improved maintainability.",
            project: "Core Banking System"
        },
        {
            date: "19 May 2026, 16:50:25 Am",
            name: "Mehedi Hasan",
            username: "mehedihasan",
            loggedTo: "foysalhossain",
            event: "Implemented caching layer to improve backend performance.",
            project: "API Performance Boost"
        },
        {
            date: "20 May 2026, 12:10:40 Am",
            name: "Ayesha Rahman",
            username: "ayesharahman",
            loggedTo: "foysalhossain",
            event: "Conducted security audit and fixed vulnerabilities in authentication module.",
            project: "Security Hardening"
        },
        {
            date: "21 May 2026, 20:00:00 Am",
            name: "Shakib Khan",
            username: "shakibkhan",
            loggedTo: "foysalhossain",
            event: "Deployed production build and monitored system stability post-release.",
            project: "Production Deployment v2.1"
        },
        {
            date: "17 May 2026, 14:05:33 Am",
            name: "Sadia Islam",
            username: "sadiaislam",
            loggedTo: "foysalhossain",
            event: "Integrated email notification service for transaction alerts.",
            project: "Notification Service Upgrade"
        },
        {
            date: "18 May 2026, 11:30:10 Am",
            name: "Imran Hossain",
            username: "imranhossain",
            loggedTo: "foysalhossain",
            event: "Refactored legacy codebase and improved maintainability.",
            project: "Core Banking System"
        },
        {
            date: "19 May 2026, 16:50:25 Am",
            name: "Mehedi Hasan",
            username: "mehedihasan",
            loggedTo: "foysalhossain",
            event: "Implemented caching layer to improve backend performance.",
            project: "API Performance Boost"
        },
        {
            date: "20 May 2026, 12:10:40 Am",
            name: "Ayesha Rahman",
            username: "ayesharahman",
            loggedTo: "foysalhossain",
            event: "Conducted security audit and fixed vulnerabilities in authentication module.",
            project: "Security Hardening"
        },
        {
            date: "21 May 2026, 20:00:00 Am",
            name: "Shakib Khan",
            username: "shakibkhan",
            loggedTo: "foysalhossain",
            event: "Deployed production build and monitored system stability post-release.",
            project: "Production Deployment v2.1"
        }

    ])



    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <div className="border-b border-[#e5e7eb]  h-[65px] mb-5 flex">
                <div className="text-left w-[1330px]   mx-auto flex items-center justify-between">
                    <div className=" flex   items-center justify-center ">
                        <h2 className='text-2xl font-semibold font-jukarta'>Insights</h2>
                    </div>
                    <div ref={ref} className="relative flex items-center justify-center">

                        {/* Button */}
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="bg-indigo-500 text-white p-2 px-6 text-sm font-jakarta rounded-sm cursor-pointer
        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
        flex items-center justify-center gap-2"
                        >
                            Export <Download size={16} strokeWidth={2.5} />
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`
          absolute top-12 right-0 z-10 w-40 bg-white border border-gray-200 p-2 text-left font-jakarta
          origin-top-right transition-all duration-200 ease-out
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
                        >
                            <span className="text-sm font-semibold text-gray-700">Export As</span>

                            <button className="rounded-sm text-sm bg-indigo-500 text-white py-1.5 cursor-pointer w-full mt-2 flex items-center justify-center gap-2 hover:bg-indigo-600 transition">
                                PDF <FileText size={16} strokeWidth={2} />
                            </button>

                            <button className="rounded-sm text-sm bg-indigo-500 text-white py-1.5 cursor-pointer w-full mt-2 flex items-center justify-center gap-2 hover:bg-indigo-600 transition">
                                Excel <Table2 size={16} strokeWidth={2.25} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" w-[1330px] mx-auto">

                <table className="table w-full mx-auto border-separate border-spacing-y-0.5 border overflow-hidden border-gray-200 mb-5">

                    {/* HEADER */}
                    <thead className="bg-gray-200   font-jukarta">
                        <tr className="text-gray-600 text-sm ">
                            <th className="py-3 w-55 " >Date & Time</th>
                            <th className="py-3 w-50 " >Logged</th>
                            <th className="py-3 w-170 ">Event</th>
                            <th className="py-3 w-80 ">Project</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="">
                        {
                            insights?.map((insight, key) => <SingleInsight key={key} insight={insight} />)
                        }
                        {/* <SingleInsight /> */}
                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default Insights;