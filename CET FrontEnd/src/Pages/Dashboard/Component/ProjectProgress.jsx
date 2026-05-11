import { Loader, PackageX, TriangleAlert, ExternalLink } from 'lucide-react';
import React from 'react';

const ProjectProgress = () => {
    const projects = [
        {
            name: "Project Asana",
            progress: 50,
            status: "ongoing",
            icon: <Loader size={20} />,
            color: "bg-indigo-500",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-600"
        },
        {
            name: "WebDev Code Market",
            progress: 90,
            status: "delayed",
            icon: <PackageX size={20} />,
            color: "bg-rose-500",
            lightColor: "bg-rose-50",
            textColor: "text-rose-600"
        },
        {
            name: "bKash Mobile App UI",
            progress: 75,
            status: "ongoing",
            icon: <Loader size={20} />,
            color: "bg-indigo-500",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-600"
        },
        {
            name: "Rocket App Backend",
            progress: 80,
            status: "attention",
            icon: <TriangleAlert size={20} />,
            color: "bg-amber-500",
            lightColor: "bg-amber-50",
            textColor: "text-amber-600"
        }
    ];

    return (
        <div className='bg-white border border-gray-200 rounded-md p-6 shadow-xsm flex-1 font-jukarta'>
            {/* Header */}
            <div className="flex items-center justify-between mb-6 text-left">
                <div>
                    <h2 className='text-xl font-bold text-slate-900'>Project Progress</h2>
                    <p className='text-xs text-slate-500 mt-1'>Track completion and health status</p>
                </div>
                    {/* <button className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold flex items-center gap-1 transition-colors">
                        View All <ExternalLink size={14} />
                    </button> */}
            </div>

            {/* Project List */}
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50/50 transition-all duration-200 cursor-pointer"
                    >
                        {/* Status Icon Badge */}
                        <div className={`shrink-0 w-12 h-12 ${project.lightColor} ${project.textColor} rounded-lg flex items-center justify-center`}>
                            {project.icon}
                        </div>

                        {/* Project Details & Progress */}
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h3 className='text-sm font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors'>
                                        {project.name}
                                    </h3>
                                    <p className='text-[10px] font-bold uppercase tracking-wider text-gray-600 text-left'>
                                        {project.status}
                                    </p>
                                </div>
                                <span className={`text-sm font-bold ${project.textColor}`}>
                                    {project.progress}%
                                </span>
                            </div>

                            {/* Custom Progress Bar */}
                            <div className='w-full h-2 rounded-full bg-slate-100 overflow-hidden'>
                                <div 
                                    className={`${project.color} h-full rounded-full transition-all duration-1000 ease-out`} 
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Insight */}
            <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 text-center italic">
                    "WebDev Code Market" is currently at risk due to missed milestones.
                </p>
            </div>
        </div>
    );
};

export default ProjectProgress;