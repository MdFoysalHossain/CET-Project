import { Download, FileText, Search, Table2, X, Filter } from 'lucide-react';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import SingleInsight from './Components/SingleInsight';
import { Link, useLocation } from 'react-router';
import { Helmet } from 'react-helmet';

const Insights = () => {
    const location = useLocation()
    const isInsight = location.pathname && location.pathname === "/Dashboard/Insights" ? true : false
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

    console.log("Current Location:", location.pathname, isInsight)

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

    if (!isInsight) {
        return (
            <div className="bg-gray-50  font-jukarta mb-20">


                <div className="w--full  mx-auto">
                    {/* Advanced Filtering Bar */}
                    <div className="bg-white p-5 border border-gray-200 rounded-md mb-6 shadow-xsm hidden">


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
                                    <input type="date" className="w-full border h-[38px] border-gray-200 rounded-md px-2 py-1.5 text-sm bg-gray-50" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">To</label>
                                    <input type="date" className="w-full border h-[38px] border-gray-200 rounded-md px-2 py-1.5 text-sm bg-gray-50" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Table Container */}
                    <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-xsm px-6">


                        <div className="flex items-center justify-between w-full text-left mt-6 mb-4">
                            <div className='flex-1'>
                                <h2 className='text-xl font-bold text-slate-900'>Insights Summary</h2>
                                <p className='text-xs text-slate-500 mt-1'> Monitor your team's recent 10 activity</p>
                            </div>
                            <div className="mt-6 flex flex-col text-rights items-end gap-5 justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                {/* <p>Showing {insights.length} recent activity</p> */}
                                <Link to={"/Dashboard/Insights"} className="text-indigo-500 hover:underline">View All Activity</Link>
                            </div>
                        </div>


                        <table className="w-full text-left border-collapse mb-5">
                            <thead className="bg-white border-b border-gray-100">
                                <tr className="text-gray-400 text-[12px] uppercase tracking-wider font-bold">
                                    <th className="px-6 py-4">Timestamp</th>
                                    <th className="px-6 py-4">Identity</th>
                                    <th className="px-6 py-4">Action Details</th>
                                    <th className="px-6 py-4">Scope</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredInsights.length > 0 ? (
                                    filteredInsights.map((insight, key) => (
                                        key < 10 && <SingleInsight key={key} insight={insight} />

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
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen font-jukarta">
            {/* Header Section */}
            <Helmet>
                <title>ProjectNext - Insights</title>
            </Helmet>
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
                                <input type="date" className="w-full border h-[38px] border-gray-200 rounded-md px-2 py-1.5 text-sm bg-gray-50" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                            </div>
                            <div className="flex-1">
                                <label className="text-[11px] font-bold text-gray-400 uppercase mb-1 block">To</label>
                                <input type="date" className="w-full border h-[38px] border-gray-200 rounded-md px-2 py-1.5 text-sm bg-gray-50" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
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