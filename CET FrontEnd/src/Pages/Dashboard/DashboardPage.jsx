import React from 'react';
import ProjectsCounting from './Component/ProjectsCounting';
import ProjectProgress from './Component/ProjectProgress';
import DashboardActivity from './Component/DashboardActivity';
import UpcomingCalanderEvents from './Component/UpcomingCalanderEvents';
import TaskSummury from './Component/TaskSummury';

const DashboardPage = () => {
    return (
        <div>
            <title>TrackLio - Dashboard</title>
            <div className="flex items-center justify-start px-6 border-b border-gray-200 h-[65px] text-left">
                <div className="max-w-[1330px] mx-auto w-full  flex  gap-0 items-start justify-between">
                    <h2 className="text-2xl font-semibold font-jukarta">Dashboard</h2>
                    <p className='text-xl font-jukarta font-semibold'>👋Welcome back! </p>
                </div>
            </div>

            <div className="max-w-[1330px] mx-auto mt-5 ">
                <ProjectsCounting />


                <div className="flex flex-row gap-5 rounded-sm mt-5">

                    <div className="flex-1 h-full">
                        <ProjectProgress />
                    </div>

                    <div className="">
                        <DashboardActivity />
                    </div>
                </div>

                <UpcomingCalanderEvents />

                <TaskSummury />


            </div>

        </div>
    );
};

export default DashboardPage;