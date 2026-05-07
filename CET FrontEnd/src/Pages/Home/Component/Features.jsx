import { ActivityIcon, Bell, CalendarRange, ChartArea, Kanban, UserKey, UsersRound } from 'lucide-react';
import React from 'react';

const Features = () => {

    const allFeatures = [
        {
            title: "Kanban Boards",
            desc: "Visualize and manage tasks through clear workflow stages like To Do, In Progress, QA, and Completed. Keep your project flow simple and structured.",
            icon: <Kanban className="w-6 h-6" />
        },
        {
            title: "Team Collaboration",
            desc: "Enable smooth teamwork by allowing users to comment on tasks and share updates in real-time. Keep everyone aligned without switching tools.",
            icon: <UsersRound className="w-6 h-6" />
        },
        {
            title: "Project Analytics",
            desc: "Get meaningful insights into project performance and team productivity. Identify bottlenecks early and improve your delivery speed.",
            icon: <ChartArea className="w-6 h-6" />
        },
        {
            title: "Calendar & Deadlines",
            desc: "Track all project milestones and task deadlines in a clean calendar view. Ensure nothing is missed and everything stays on schedule.",
            icon: <CalendarRange className="w-6 h-6" />
        },
        {
            title: "Role Management",
            desc: "Control access and permissions across your workspace. Assign specific roles to ensure the right level of security for every user.",
            icon: <UserKey className="w-6 h-6" />
        },
        {
            title: "Notifications",
            desc: "Stay instantly informed about task updates, assignments, and comments through real-time push notifications and alerts.",
            icon: <Bell className="w-6 h-6" />
        }
    ]

    return (
        <div className='w-[1330px] mx-auto mt-20'>
            <div className="text-center mb-20 font-jukarta">
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4 border border-indigo-100">
                    <ActivityIcon size={16} />
                    <span className='uppercase'>OUR CAPABILITIES</span>
                </div>
                <h2 className='text-5xl font-extrabold text-slate-900 tracking-tight'>
                    Complexity,  <span className="text-indigo-500">simplified.</span>
                </h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-8 px-4">
                {allFeatures.map((feature, index) => (
                    <div key={index} className="group bg-indigo-50/50 border border-indigo-100/50 w-full rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-2">

                        <div className="bg-indigo-500 h-12 w-12 rounded-xl flex justify-center items-center text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
                            {feature.icon}
                        </div>

                        <div className="text-left font-jukarta mt-6">
                            <h2 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h2>
                            <p className="text-[15px] leading-relaxed text-slate-600 font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Features;