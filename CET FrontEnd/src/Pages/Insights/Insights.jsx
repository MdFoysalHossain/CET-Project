// import { ChevronLeft, Download, FileText, Sheet, Table2 } from 'lucide-react';
// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router';
// import SingleInsight from './Components/SingleInsight';

// const Insights = () => {
//     const [open, setOpen] = useState(false);
//     const ref = useRef(null);
//     const [insights, setInsights] = useState([

//         {
//             date: "09 May 2026, 24:30:30 Am",
//             name: "Foysal Hossain",
//             username: "foysalhossain",
//             loggedTo: "foysalhossain",
//             event: "Veniam itaque eveniet illum porro ducimus unde alias minus perferendis, quae minima.",
//             project: "bKash App Redesign"
//         },
//         {
//             date: "13 May 2026, 13:30:30 Am",
//             name: "Easeen Hasan",
//             username: "easeenhasan",
//             loggedTo: "foysalhossain",
//             event: "Implemented authentication flow with OTP verification and improved security layer.",
//             project: "Nagad App Backend Integration"
//         },
//         {
//             date: "14 May 2026, 10:15:12 Am",
//             name: "Rafiul Karim",
//             username: "rafiulkarim",
//             loggedTo: "foysalhossain",
//             event: "Fixed critical bug in payment gateway response handling.",
//             project: "Rocket Payment System"
//         },
//         {
//             date: "15 May 2026, 09:45:00 Am",
//             name: "Nusrat Jahan",
//             username: "nusratjahan",
//             loggedTo: "foysalhossain",
//             event: "Optimized database queries to reduce API response time by 35%.",
//             project: "User Analytics Dashboard"
//         },
//         {
//             date: "16 May 2026, 18:20:45 Am",
//             name: "Tanvir Ahmed",
//             username: "tanvirahmed",
//             loggedTo: "foysalhossain",
//             event: "Designed new responsive UI components for mobile banking app.",
//             project: "bKash UI Revamp"
//         },
//         {
//             date: "17 May 2026, 14:05:33 Am",
//             name: "Sadia Islam",
//             username: "sadiaislam",
//             loggedTo: "foysalhossain",
//             event: "Integrated email notification service for transaction alerts.",
//             project: "Notification Service Upgrade"
//         },
//         {
//             date: "18 May 2026, 11:30:10 Am",
//             name: "Imran Hossain",
//             username: "imranhossain",
//             loggedTo: "foysalhossain",
//             event: "Refactored legacy codebase and improved maintainability.",
//             project: "Core Banking System"
//         },
//         {
//             date: "19 May 2026, 16:50:25 Am",
//             name: "Mehedi Hasan",
//             username: "mehedihasan",
//             loggedTo: "foysalhossain",
//             event: "Implemented caching layer to improve backend performance.",
//             project: "API Performance Boost"
//         },
//         {
//             date: "20 May 2026, 12:10:40 Am",
//             name: "Ayesha Rahman",
//             username: "ayesharahman",
//             loggedTo: "foysalhossain",
//             event: "Conducted security audit and fixed vulnerabilities in authentication module.",
//             project: "Security Hardening"
//         },
//         {
//             date: "21 May 2026, 20:00:00 Am",
//             name: "Shakib Khan",
//             username: "shakibkhan",
//             loggedTo: "foysalhossain",
//             event: "Deployed production build and monitored system stability post-release.",
//             project: "Production Deployment v2.1"
//         },
//         {
//             date: "17 May 2026, 14:05:33 Am",
//             name: "Sadia Islam",
//             username: "sadiaislam",
//             loggedTo: "foysalhossain",
//             event: "Integrated email notification service for transaction alerts.",
//             project: "Notification Service Upgrade"
//         },
//         {
//             date: "18 May 2026, 11:30:10 Am",
//             name: "Imran Hossain",
//             username: "imranhossain",
//             loggedTo: "foysalhossain",
//             event: "Refactored legacy codebase and improved maintainability.",
//             project: "Core Banking System"
//         },
//         {
//             date: "19 May 2026, 16:50:25 Am",
//             name: "Mehedi Hasan",
//             username: "mehedihasan",
//             loggedTo: "foysalhossain",
//             event: "Implemented caching layer to improve backend performance.",
//             project: "API Performance Boost"
//         },
//         {
//             date: "20 May 2026, 12:10:40 Am",
//             name: "Ayesha Rahman",
//             username: "ayesharahman",
//             loggedTo: "foysalhossain",
//             event: "Conducted security audit and fixed vulnerabilities in authentication module.",
//             project: "Security Hardening"
//         },
//         {
//             date: "21 May 2026, 20:00:00 Am",
//             name: "Shakib Khan",
//             username: "shakibkhan",
//             loggedTo: "foysalhossain",
//             event: "Deployed production build and monitored system stability post-release.",
//             project: "Production Deployment v2.1"
//         }

//     ])



//     // Close on outside click
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 setOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div>
//             <div className="border-b border-[#e5e7eb]  h-[65px] mb-5 flex">
//                 <div className="text-left w-[1330px]   mx-auto flex items-center justify-between">
//                     <div className=" flex   items-center justify-center ">
//                         <h2 className='text-2xl font-semibold font-jukarta'>Insights</h2>
//                     </div>
//                     <div ref={ref} className="relative flex items-center justify-center">

//                         {/* Button */}
//                         <button
//                             onClick={() => setOpen((prev) => !prev)}
//                             className="bg-indigo-500 text-white p-2 px-6 text-sm font-jakarta rounded-sm cursor-pointer
//         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
//         flex items-center justify-center gap-2"
//                         >
//                             Export <Download size={16} strokeWidth={2.5} />
//                         </button>

//                         {/* Dropdown */}
//                         <div
//                             className={`
//           absolute top-12 right-0 z-10 w-40 bg-white border border-gray-200 p-2 text-left font-jakarta
//           origin-top-right transition-all duration-200 ease-out
//           ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
//         `}
//                         >
//                             <span className="text-sm font-semibold text-gray-700">Export As</span>

//                             <button className="rounded-sm text-sm bg-indigo-500 text-white py-1.5 cursor-pointer w-full mt-2 flex items-center justify-center gap-2 hover:bg-indigo-600 transition">
//                                 PDF <FileText size={16} strokeWidth={2} />
//                             </button>

//                             <button className="rounded-sm text-sm bg-indigo-500 text-white py-1.5 cursor-pointer w-full mt-2 flex items-center justify-center gap-2 hover:bg-indigo-600 transition">
//                                 Excel <Table2 size={16} strokeWidth={2.25} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//             <div className=" w-[1330px] mx-auto">

//                 <table className="table w-full mx-auto border-separate border-spacing-y-0.5 border overflow-hidden border-gray-200 mb-5">

//                     {/* HEADER */}
//                     <thead className="bg-gray-200   font-jukarta">
//                         <tr className="text-gray-600 text-sm ">
//                             <th className="py-3 w-55 " >Date & Time</th>
//                             <th className="py-3 w-50 " >Logged</th>
//                             <th className="py-3 w-170 ">Event</th>
//                             <th className="py-3 w-80 ">Project</th>
//                         </tr>
//                     </thead>

//                     {/* BODY */}
//                     <tbody className="">
//                         {
//                             insights?.map((insight, key) => <SingleInsight key={key} insight={insight} />)
//                         }
//                         {/* <SingleInsight /> */}
//                     </tbody>

//                 </table>

//             </div>

//         </div>
//     );
// };

// export default Insights;







import { Download, FileText, Search, Table2, X, Filter } from 'lucide-react';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import SingleInsight from './Components/SingleInsight';

const Insights = () => {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterUser, setFilterUser] = useState("");
    const [filterProject, setFilterProject] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    
    const ref = useRef(null);

    // Data using unified UTC ISO strings
    const [insights] = useState([
        { id: 1, timestamp: "2026-05-09T10:30:45Z", username: "foysalhossain", loggedTo: "foysalhossain", event: "Updated bKash API gateway security headers.", project: "bKash App Redesign", status: "Create" },
        { id: 2, timestamp: "2026-05-13T13:45:12Z", username: "easeenhasan", loggedTo: "foysalhossain", event: "Implemented multi-factor authentication for admin panel.", project: "Nagad App Integration", status: "Update" },
        { id: 3, timestamp: "2026-05-14T09:15:00Z", username: "rafiulkarim", loggedTo: "foysalhossain", event: "Resolved database deadlock in transaction logs.", project: "Rocket Payment System", status: "Delete" },
        { id: 4, timestamp: "2026-05-15T16:20:33Z", username: "nusratjahan", loggedTo: "foysalhossain", event: "Optimized user analytics query performance.", project: "User Analytics Dashboard", status: "Genral" },
        { id: 5, timestamp: "2026-05-16T18:05:01Z", username: "tanvirahmed", loggedTo: "foysalhossain", event: "Refined dark mode UI colors for consistency.", project: "bKash UI Revamp", status: "Genral" },
        ]);

    // Derived lists for Dropdowns
    const usernames = [...new Set(insights.map(i => i.username))];
    const projects = [...new Set(insights.map(i => i.project))];

    // Real-time Multi-Filter Logic
    const filteredInsights = useMemo(() => {
        return insights.filter(item => {
            const matchesSearch = item.event.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                item.username.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesUser = filterUser ? item.username === filterUser : true;
            const matchesProject = filterProject ? item.project === filterProject : true;
            
            // Date comparison (extracting YYYY-MM-DD from the ISO string)
            const itemDate = item.timestamp.split('T')[0]; 
            const matchesDateFrom = dateFrom ? itemDate >= dateFrom : true;
            const matchesDateTo = dateTo ? itemDate <= dateTo : true;

            return matchesSearch && matchesUser && matchesProject && matchesDateFrom && matchesDateTo;
        });
    }, [searchQuery, filterUser, filterProject, dateFrom, dateTo, insights]);

    useEffect(() => {
        const handleClickOutside = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen font-jukarta">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200 h-[70px] flex items-center mb-6">
                <div className="max-w-[1330px] w-full mx-auto px-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Insights</h2>
                    <div ref={ref} className="relative">
                        <button 
                            onClick={() => setOpen(!open)}
                            className="bg-indigo-500 text-white px-5 py-2 text-sm font-semibold rounded-md flex items-center gap-2 hover:bg-indigo-600 transition shadow-sm"
                        >
                            Export <Download size={16} strokeWidth={2.5} />
                        </button>
                        {open && (
                            <div className="absolute top-12 right-0 z-20 w-44 bg-white border border-gray-200 rounded-lg shadow-xl p-2">
                                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 rounded flex items-center gap-2">
                                    <FileText size={14} /> PDF Report
                                </button>
                                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 rounded flex items-center gap-2">
                                    <Table2 size={14} /> Excel Sheet
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-[1330px] mx-auto px-4">
                {/* Advanced Filtering Bar */}
                <div className="bg-white p-5 border border-gray-200 rounded-md mb-6 shadow-xsm">


                    <div className="flex flex-wrap items-end gap-4 ">
                        {/* Keyword Search */}
                        <div className="flex-1 min-w-[100px] hidden">
                            <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">Search Events</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input 
                                    type="text"
                                    placeholder="Search by event or user..."
                                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* User Select */}
                        <div className="flex-1">
                            <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">User</label>
                            <select 
                                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-indigo-500 bg-gray-50"
                                value={filterUser}
                                onChange={(e) => setFilterUser(e.target.value)}
                            >
                                <option value="">All Users</option>
                                {usernames.map(u => <option key={u} value={u}>@{u}</option>)}
                            </select>
                        </div>

                        {/* Project Select */}
                        <div className="flex-1">
                            <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">Project</label>
                            <select 
                                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-indigo-500 bg-gray-50"
                                value={filterProject}
                                onChange={(e) => setFilterProject(e.target.value)}
                            >
                                <option value="">All Projects</option>
                                {projects.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>

                        {/* Date Range */}
                        <div className="flex gap-2 flex-2">
                            <div className="flex-1">
                                <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">From</label>
                                <input type="date" className="w-full border h-[38px] border-gray-200 rounded-md px-2 py-1.5 text-sm bg-gray-50" value={dateFrom} onChange={(e)=>setDateFrom(e.target.value)} />
                            </div>
                            <div className="flex-1">
                                <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">To</label>
                                <input type="date" className="w-full border h-[38px] border-gray-200 rounded-md px-2 py-1.5 text-sm bg-gray-50" value={dateTo} onChange={(e)=>setDateTo(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Container */}
                <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-xsm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr className="text-gray-500 text-[12px] uppercase tracking-wider font-bold">
                                <th className="px-6 py-4">Timestamp</th>
                                <th className="px-6 py-4">Identity</th>
                                <th className="px-6 py-4">Action Details</th>
                                <th className="px-6 py-4">Scope</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredInsights.length > 0 ? (
                                filteredInsights.map((insight) => (
                                    <SingleInsight key={insight.id} insight={insight} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-20 text-gray-400">
                                        No activity logs found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Insights;