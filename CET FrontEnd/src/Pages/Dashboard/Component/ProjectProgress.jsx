// import { Loader, PackageX, TriangleAlert } from 'lucide-react';
// import React from 'react';

// const ProjectProgress = () => {
//     return (
//         <div className='bg-white border flex-1 border-gray-200 rounded-sm p-5'>
//             <div className="text-left">
//                 <h2 className='text-lg font-jukarta font-semibold'>Project Progress</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2.5 mt-5 *:cursor-pointer *:hover:shadow-xs *:transition-transform *:duration-300">


//                 <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
//                     <div className="">
//                         <Loader size={26} className='text-indigo-600'/>
//                     </div>
//                     <div className="flex-1">
//                         <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
//                             <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>Project Asana</h3>
//                             <p className='font-semibold text-md'>50%</p>
//                         </div>
//                         <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
//                             <div className='bg-green-400 h-[7px] rounded-sm w-[50%]'> </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
//                     <div className="">
//                         <PackageX size={26} className='text-red-600'/>
//                     </div>
//                     <div className="flex-1">
//                         <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
//                             <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>WebDev Code Market</h3>
//                             <p className='font-semibold text-md'>90%</p>
//                         </div>
//                         <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
//                             <div className='bg-red-500 h-[7px] rounded-sm w-[90%]'> </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
//                     <div className="">
//                         <Loader size={26} className='text-indigo-600'/>
//                     </div>
//                     <div className="flex-1">
//                         <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
//                             <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>bKash Mobile App UI Design</h3>
//                             <p className='font-semibold text-md'>75%</p>
//                         </div>
//                         <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
//                             <div className='bg-green-400 h-[7px] rounded-sm w-[75%]'> </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
//                     <div className="">
//                         <TriangleAlert size={26} className='text-yellow-600'/>
//                     </div>
//                     <div className="flex-1">
//                         <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
//                             <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>Rocket App Backend Developement</h3>
//                             <p className='font-semibold text-md'>80%</p>
//                         </div>
//                         <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
//                             <div className='bg-green-400 h-[7px] rounded-sm w-[80%]'> </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>

//         </div>
//     );
// };

// export default ProjectProgress;










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