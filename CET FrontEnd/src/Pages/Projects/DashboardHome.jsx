import React from 'react';
import ProjectsCounting from '../Dashboard/Component/ProjectsCounting';
// import DashboardActivityLogs from '../Dashboard/Component/DashboardActivityLogs';

const DashboardHome = () => {
    return (
        <div className='max-w-[1330px] mx-auto'>
            <ProjectsCounting />

            <div className="flex mt-10 gap-5 overflow-hidden">
                <div className="flex-2">
                    <div className="text-left font-jukarta font-semibold text-xl mb-5">
                        <h2>Activity Logs</h2>
                    </div>

                    {/* <DashboardActivityLogs/> */}

                </div>
                <div className="flex-1">
                    <div className="text-left p-2">
                        <p className='flex gap-1.5  items-center'>
                            <span className='font-semibold capitalize text-sm'>project name</span>
                            <span className='text-sm'>by</span>
                            <span className='font-semibold capitalize text-sm'>user name</span>
                            <span className='font-semibold capitalize text-sm'>(12:50 PM, 11/12/2025)</span>
                        </p>

                        <p>Changed This and That into this</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;