import React from 'react';
import { MoreHorizontal, Filter, Search } from 'lucide-react';

const TaskSummary = () => {
    const tasks = [
        {
            id: 1,
            title: "Creating Mobile UI for bKash App",
            project: "bKash Mobile App",
            status: "To Do",
            deadline: "Dec 12, 2026",
            assignedTo: ["Foysal Hossain", "Easeen Hasan", "Farhana Akter"],
        },
        {
            id: 2,
            title: "Dashboard API Integration",
            project: "Rocket App Backend",
            status: "In Progress",
            deadline: "Dec 15, 2026",
            assignedTo: ["John Doe"],
        },
    ];

    // Helper to get initials for avatars
    const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

    return (
        <div className='bg-white border border-gray-200 rounded-md p-6 shadow-xsm my-5 font-jukarta text-left'>
            {/* Table Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center justify-between w-full">
                    <div className='flex-1'>
                        <h2 className='text-xl font-bold text-slate-900'>Task Summary</h2>
                        <p className='text-xs text-slate-500 mt-1'>Manage and monitor your team's active tasks</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <p>Showing {tasks.length} active tasks</p>
                        {/* <button className="text-indigo-500 hover:underline">View All Tasks</button> */}
                    </div>
                </div>

                <div className="flex items-center gap-2 hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                    </div>
                    <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Clean Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="pb-4 pt-0 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">No.</th>
                            <th className="pb-4 pt-0 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Project</th>
                            <th className="pb-4 pt-0 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Task Name</th>
                            <th className="pb-4 pt-0 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Status</th>
                            <th className="pb-4 pt-0 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Deadline</th>
                            <th className="pb-4 pt-0 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Assigned To</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {tasks.map((task) => (
                            <tr key={task.id} className="group hover:bg-slate-50/80 transition-colors">
                                <td className="py-4 px-4">
                                    <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
                                        #{task.id.toString().padStart(3, '0')}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-sm font-semibold text-slate-600">{task.project}</td>
                                <td className="py-4 px-4 text-sm font-bold text-slate-900">{task.title}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight
                                        ${task.status === "To Do" ? "bg-slate-100 text-slate-600" :
                                            task.status === "In Progress" ? "bg-amber-100 text-amber-600" :
                                                "bg-emerald-100 text-emerald-600"}`}>
                                        {task.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-sm text-slate-500 font-medium">{task.deadline}</td>

                                <td className="py-4 px-4">
                                    <div className="flex -space-x-2 overflow-hidden">
                                        {task.assignedTo.map((name, i) => (
                                            <div className="relative">
                                                <div
                                                    key={i}
                                                    title={name}
                                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-indigo-500 text-[10px] font-bold text-white cursor-help"
                                                >
                                                    {getInitials(name)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                {/* <td className="py-4 px-4 text-right">
                                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination / Footer */}
            {/* <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                <p>Showing {tasks.length} active tasks</p>
                <button className="text-indigo-500 hover:underline">View All Tasks</button>
            </div> */}
        </div>
    );
};

export default TaskSummary;