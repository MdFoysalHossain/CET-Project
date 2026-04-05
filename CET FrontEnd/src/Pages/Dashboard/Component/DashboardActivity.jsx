import React, { useState } from 'react';

const DashboardActivity = () => {
    const [activities, setActivities] = useState(
        [
            {
                id: 1,
                user: "Foysal Hossain",
                date: "04/12/2026",
                time: "10:30 PM",
                title: "Assigned 'Dashboard UI Redesign' task",
            },
            {
                id: 2,
                user: "Foysal Hossain",
                date: "04/12/2026",
                time: "09:15 PM",
                title: "Completed 'Login API Integration'",
            },
            {
                id: 3,
                user: "Foysal Hossain",
                date: "04/12/2026",
                time: "08:40 PM",
                title: "Updated 'Rocket Backend Development'",
            },
            {
                id: 4,
                user: "Foysal Hossain",
                date: "04/12/2026",
                time: "07:20 PM",
                title: "Commented on 'bKash Mobile UI Design'",
            },
            {
                id: 5,
                user: "Foysal Hossain",
                date: "04/12/2026",
                time: "06:10 PM",
                title: "Marked 'WebDev Code Market' as delayed",
            },
            {
                id: 6,
                user: "Foysal Hossain",
                date: "04/12/2026",
                time: "05:00 PM",
                title: "Created new project 'E-commerce Dashboard'",
            },
        ]
    )

    return (
        <div className='bg-white border w-[450px] border-gray-200 rounded-sm px-3 pb-3 pt-2'>
            <div className="text-left">
                <h2 className='text-lg font-jukarta font-semibold'>Recent Activity</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2.5 mt-5 max-h-[400px] overflow-y-auto">

                {
                    activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex flex-col bg-white border border-gray-200 rounded-sm p-3 items-start gap-2"
                        >
                            <div className="flex flex-col justify-between gap-1 flex-1 w-full font-jukarta text-md">

                                {/* Top Row */}
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-indigo-600 font-semibold border border-indigo-300 px-2 rounded-md">
                                        {activity.user}
                                    </p>

                                    <div className="flex gap-2.5 text-gray-500">
                                        <p className="font-semibold text-sm">{activity.date}</p>
                                        <p className="font-semibold text-sm">{activity.time}</p>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="text-left mt-2">
                                    <h3 className="max-w-[400px] text-md line-clamp-1 font-semibold">
                                        {activity.title}
                                    </h3>
                                </div>

                            </div>
                        </div>
                    ))
                }



            </div>

        </div >
    );
};

export default DashboardActivity;