import React from 'react';

const ProjectsCounting = () => {
    return (
        <div>
            <div className="flex gap-8 justify-center items-center py-5 bg-[rgba(229,231,235,0.25)] border border-[#e5e7eb]">
                <div className="border bg-white border-[#e5e7eb] rounded-xl p-6 font-jukarta">
                    <p className='text-5xl main-color mb-2'>0</p>
                    <span className='text-sm font-semibold uppercase'>Total Projects</span>
                </div>

                <div className="border bg-white border-[#e5e7eb] rounded-xl p-6 font-jukarta">
                    <p className='text-5xl main-color mb-2'>0</p>
                    <span className='text-sm font-semibold uppercase'>Ongoing Projects</span>
                </div>

                <div className="border bg-white border-[#e5e7eb] rounded-xl p-6 font-jukarta">
                    <p className='text-5xl main-color mb-2'>0</p>
                    <span className='text-sm font-semibold uppercase'>Ongoing Projects</span>
                </div>

                <div className="border bg-white border-[#e5e7eb] rounded-xl p-6 font-jukarta">
                    <p className='text-5xl main-color mb-2'>0</p>
                    <span className='text-sm font-semibold uppercase'>Delivered Projects</span>
                </div>
                <div className="border bg-white border-[#e5e7eb] rounded-xl p-6 font-jukarta">
                    <p className='text-5xl main-color mb-2'>0</p>
                    <span className='text-sm font-semibold uppercase'>Near Deadline</span>
                </div>
                <div className="border bg-white border-[#e5e7eb] rounded-xl p-6 font-jukarta">
                    <p className='text-5xl main-color mb-2'>0</p>
                    <span className='text-sm font-semibold uppercase'>Missed Deadline</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCounting;