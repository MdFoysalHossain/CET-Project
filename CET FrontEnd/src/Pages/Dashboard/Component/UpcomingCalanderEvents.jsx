// import React from 'react';

// const UpcomingCalanderEvents = () => {
//     return (
//         <div className='bg-white border border-gray-200 p-4 mt-5 rounded-sm'>
//             <div className="font-jukarta text-lg font-semibold text-left">
//                 <div className="">
//                     <h2>Todays Calendar Events</h2>
//                     <p className='text-sm text-gray-500'>5 April, 2026</p>
//                 </div>

//                 <div className="mt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2.5">
                    
//                     <div className="flex flex-col justify-start items-start gap-3 mb-3 border border-gray-200 rounded-sm p-3">
//                         <div className="flex gap-2 items-center">
//                             <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                             <p className='text-sm font-jukarta font-semibold'>Live Push of WebDev</p>
//                         </div>
//                         <div className="">
//                             <p className='text-sm font-jukarta font-semibold'>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, animi!
//                             </p>
//                         </div>
//                     </div>
                    
//                     <div className="flex flex-col justify-start items-start gap-3 mb-3 border border-gray-200 rounded-sm p-3">
//                         <div className="flex gap-2 items-center">
//                             <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                             <p className='text-sm font-jukarta font-semibold'>Meeting with Team</p>
//                         </div>
//                         <div className="">
//                             <p className='text-sm font-jukarta font-semibold'>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt impedit quae amet atque enim similique corrupti ea quis rerum!
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex flex-col justify-start items-start gap-3 mb-3 border border-gray-200 rounded-sm p-3">
//                         <div className="flex gap-2 items-center">
//                             <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                             <p className='text-sm font-jukarta font-semibold'>QA Test Meeting</p>
//                         </div>
//                         <div className="">
//                             <p className='text-sm font-jukarta font-semibold'>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt aliquam natus dolore repellendus ipsa.
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default UpcomingCalanderEvents;












import { Calendar, Clock, Plus, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const UpcomingCalendarEvents = () => {
    const events = [
        {
            title: "Live Push of WebDev",
            time: "09:00 AM - 10:30 AM",
            desc: "Final deployment of the market module and production sync.",
            color: "border-l-indigo-500",
            dot: "bg-indigo-500"
        },
        {
            title: "Meeting with Team",
            time: "11:00 AM - 12:00 PM",
            desc: "Weekly sync to discuss sprint progress and potential blockers. ",
            color: "border-l-emerald-500",
            dot: "bg-emerald-500"
        },
        {
            title: "QA Test Meeting",
            time: "03:30 PM - 04:30 PM",
            desc: "Reviewing bug reports for the bKash Mobile App UI project.",
            color: "border-l-amber-500",
            dot: "bg-amber-500"
        }
    ];

    return (
        <div className='bg-white border border-gray-200 p-6 rounded-md shadow-xsm mt-5 font-jukarta'>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg text-indigo-500">
                        <Calendar size={20} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-xl font-bold text-slate-900 leading-tight">Today's Schedule</h2>
                        <p className='text-xs font-semibold text-indigo-500 uppercase tracking-wider mt-0.5'>Friday, 5 April 2026</p>
                    </div>
                </div>
                {/* <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
                    <Plus size={20} />
                </button> */}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 font-jukarta">
                {events.map((event, index) => (
                    <Link  to={"/Dashboard/Calendar"}
                        key={index}
                        className={`group relative flex flex-col gap-3 p-4 bg-white border border-slate-100 border-l-4 ${event.color} rounded-r-xl rounded-l-sm hover:shadow-md hover:translate-x-1 transition-all duration-200 cursor-pointer`}
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${event.dot}`}></div>
                                <h3 className='text-sm font-bold text-slate-800 line-clamp-1'>{event.title}</h3>
                            </div>
                            {/* <button className="text-slate-300 group-hover:text-slate-500">
                                <MoreHorizontal size={14} />
                            </button> */}
                        </div>

                        {/* <div className="flex items-center gap-1.5 text-slate-400">
                            <Clock size={12} />
                            <span className="text-[11px] font-medium tracking-wide">{event.time}</span>
                        </div> */}

                        <p className='text-xs  text-gray-500 leading-relaxed line-clamp-2'>
                            {event.desc}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Empty State / Bottom Link (Optional) */}
            <div className="mt-6 text-center">
                <Link to={"/Dashboard/Calendar"} className="text-xs font-bold text-slate-400 hover:text-indigo-500 transition-colors uppercase tracking-widest">
                    Open Full Calendar
                </Link>
            </div>
        </div>
    );
};

export default UpcomingCalendarEvents;