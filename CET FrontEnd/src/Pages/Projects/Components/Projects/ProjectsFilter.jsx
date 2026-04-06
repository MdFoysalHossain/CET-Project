import { Funnel, Plus } from 'lucide-react';
import React, { useState } from 'react';
import ProjectDashboardPage from './ProjectInputForm';

const ProjectsFilter = () => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <div className="font-jukarta  w-full flex justify-between items-center bg-[rgba(229,231,235,0.25)]/0 p-4 px-0 py-[10.5px] border border-[#e5e7eb]/0">
                <div className="text-2xl font-semibold">
                    All Projects
                </div>

                <div className="flex gap-5 items-center">
                    <div className="w-[300px]">
                        <label className="input bg-white border-[#e5e7eb]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>

                    <div className="flex gap-2 cursor-pointer rounded-sm bg-white border border-[#e5e7eb] justify-center items-center p-2  px-4">
                        <Funnel size={15} /> <p className='text-[15px]'>Filter</p>
                    </div>

                    <div className="flex gap-2 cursor-pointer rounded-sm bg-white border border-[#e5e7eb] justify-center items-center p-2 px-4" onClick={() => setOpen(true)}>
                        <Plus size={18} /> <p className='text-[15px] font-jukarta' >Create Task</p>
                    </div>

                </div>
            </div>
            

            <ProjectDashboardPage isOpen={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default ProjectsFilter;