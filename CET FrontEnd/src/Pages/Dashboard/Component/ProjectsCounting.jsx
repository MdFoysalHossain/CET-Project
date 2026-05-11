import { Loader, Package, PackageCheck, PackageOpen, PackageX, TriangleAlert, ClipboardList, CheckCircle2, Timer, AlertCircle, PauseCircle } from 'lucide-react';
import React from 'react';

const ProjectsCounting = () => {
    return (


        <div className='flex flex-col gap-6 bg-white p-8 rounded-md border border-gray-200 shadow-xsm font-jukarta'>

            {/* Header Section */}
            <div className="flex items-center justify-between">
                <h2 className='text-xl font-semibold text-slate-900 tracking-tight'>Project Overview</h2>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">Refreash To Load Stats</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Total Projects */}
                <StatCard
                    label="Total Projects"
                    value="9"
                    icon={<Package size={22} />}
                    color="text-slate-600"
                    bgColor="bg-slate-50"
                />
                {/* Ongoing */}
                <StatCard
                    label="Ongoing"
                    value="4"
                    icon={<Loader size={22} />}
                    color="text-indigo-500"
                    bgColor="bg-indigo-50"
                />
                {/* Delivered */}
                <StatCard
                    label="Delivered"
                    value="2"
                    icon={<PackageCheck size={22} />}
                    color="text-emerald-500"
                    bgColor="bg-emerald-50"
                />
                {/* Upcoming */}
                <StatCard
                    label="Upcoming"
                    value="1"
                    icon={<TriangleAlert size={22} />}
                    color="text-amber-500"
                    bgColor="bg-amber-50"
                />
                {/* Missed */}
                <StatCard
                    label="Missed"
                    value="2"
                    icon={<PackageX size={22} />}
                    color="text-rose-500"
                    bgColor="bg-rose-50"
                />
            </div>

            <hr className="border-slate-100" />

            {/* Tasks Section */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider text-left">Task Distribution</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                    <MiniTaskStat label="Total" value="0" icon={<ClipboardList size={16} />} />
                    <MiniTaskStat label="In To Do" value="0" icon={<Timer size={16} />} />
                    <MiniTaskStat label="In Progress" value="0" icon={<Timer size={16} />} />
                    <MiniTaskStat label="In QA" value="0" icon={<PauseCircle size={16} />} />
                    <MiniTaskStat label="Completed" value="0" icon={<CheckCircle2 size={16} />} />
                    <MiniTaskStat label="Overdue" value="0" icon={<AlertCircle size={16} />} isWarning />
                </div>
            </div>

            {/* Attention Alerts (Optional/Hidden) */}
            <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-100 rounded-lg text-amber-700 text-xs font-medium">
                    <TriangleAlert size={14} /> 3 Projects Need Attention
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-rose-50 border border-rose-100 rounded-lg text-rose-700 text-xs font-medium">
                    <AlertCircle size={14} /> 2 Projects Missed Deadlines
                </div>
            </div>
        </div>
    );
};

/* Reusable Large Stat Card */
const StatCard = ({ label, value, icon, color, bgColor }) => (
    <div className={`flex flex-col p-5 rounded-md border border-gray-200 hover:border-indigo-100 transition-colors duration-200`}>
        <div className={`w-10 h-10 ${bgColor} ${color} rounded-lg flex items-center justify-center mb-4`}>
            {icon}
        </div>
        <p className='text-5xl font-semibold text-slate-900 mb-1 -mt-5'>{value}</p>
        <p className='text-xs font-semibold text-slate-500 uppercase tracking-wide'>{label}</p>
    </div>
);

/* Reusable Small Task Stat */
const MiniTaskStat = ({ label, value, icon, isWarning }) => (
    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
        <div className="flex items-center gap-2">
            <span className={isWarning ? "text-rose-500" : "text-indigo-500"}>{icon}</span>
            <p className='text-xs font-semibold text-slate-600'>{label}</p>
        </div>
        <p className={`text-sm font-bold ${isWarning && value > 0 ? "text-rose-600" : "text-slate-900"}`}>{value}</p>
    </div>
);

export default ProjectsCounting;