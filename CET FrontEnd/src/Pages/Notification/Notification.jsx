import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import { Bell, Check, ChevronRight, Mail, Star, X } from 'lucide-react';

const Notification = ({ setShowNotifications }) => {
    const [allNotifications, setAllNotifications] = useState([
        {
            id: 1,
            time: "01st Jan 2027, 09:00:12 AM",
            event: "Welcome to the dashboard",
            status: "unread",
            marked: false,
            triggeredBy: "system",
            for: ["foysalhossain"]
        },
        {
            id: 2,
            time: "02nd Jan 2027, 11:24:45 AM",
            event: "Your profile was updated successfully",
            status: "read",
            marked: false,
            triggeredBy: "system",
            for: ["foysalhossain"]
        },
        {
            id: 3,
            time: "03rd Jan 2027, 02:10:30 PM",
            event: "New comment on your task",
            status: "unread",
            marked: true,
            triggeredBy: "easeenhasan",
            for: ["foysalhossain"]
        },
        {
            id: 4,
            time: "04th Jan 2027, 06:45:10 PM",
            event: "Project deadline updated",
            status: "read",
            marked: true,
            triggeredBy: "admin",
            for: ["foysalhossain"]
        },
        {
            id: 5,
            time: "05th Jan 2027, 08:12:55 AM",
            event: "You were assigned a new task",
            status: "unread",
            marked: false,
            triggeredBy: "manager",
            for: ["foysalhossain"]
        },
        {
            id: 6,
            time: "06th Jan 2027, 03:33:21 PM",
            event: "Meeting scheduled for tomorrow",
            status: "read",
            marked: true,
            triggeredBy: "teamlead",
            for: ["foysalhossain"]
        },
        {
            id: 7,
            time: "07th Jan 2027, 10:05:40 AM",
            event: "Task marked as completed",
            status: "read",
            marked: true,
            triggeredBy: "teamMember01",
            for: ["foysalhossain"]
        },
        {
            id: 8,
            time: "08th Jan 2027, 01:55:09 PM",
            event: "New file uploaded to your project",
            status: "read",
            marked: false,
            triggeredBy: "teamMember02",
            for: ["foysalhossain"]
        },
        {
            id: 9,
            time: "09th Jan 2027, 07:20:18 PM",
            event: "Reminder: Submit your report",
            status: "unread",
            marked: true,
            triggeredBy: "system",
            for: ["foysalhossain"]
        },
        {
            id: 10,
            time: "10th Jan 2027, 12:40:33 PM",
            event: "Client added a new comment",
            status: "read",
            marked: true,
            triggeredBy: "client01",
            for: ["foysalhossain"]
        },
        {
            id: 10,
            time: "10th Jan 2027, 12:40:33 PM",
            event: "Client added a new comment",
            status: "read",
            marked: true,
            triggeredBy: "client01",
            for: ["foysalhossain"]
        }
    ])

    const unreadCount = allNotifications?.filter(item => item.status === "unread").length
    const readCount = allNotifications?.filter(item => item.status === "read").length
    const markedCount = allNotifications?.filter(item => item.marked === true).length

    return (
        <div className=''>
            <div className="border-b border-[#e5e7eb] bg-gray-50 h-[65px] mb-5 flex">
                <div className="text-left flex items-center justify-between w-full">
                    <div className="text-left w-full mx-5  flex-1">
                        <h2 className='text-lg font-semibold font-jukarta text-left flex justify-between items-center w-full'>
                            <p className='flex justify-center items-center'><Bell size={20} strokeWidth='2' className='fill-white mr-2 stroke-black' /> Notifications</p>
                            <p>
                                <X size={22} strokeWidth='2' className='fill-white hover:text-indigo-500 hover:scale-120 cursor-pointer transition' onClick={() => setShowNotifications(prev => !prev)} />
                            </p>
                        </h2>
                    </div>
                </div>
            </div>

            <div className=" mx-auto overflow-hidden p-2">
                {/* <div className="grid grid-cols-3 gap-5">
                    <div className="text-left font-jukarta">
                        <p className='text-xl font-semibold text-gray-800 mb-2.5'>Unread ({unreadCount})</p>
                        <div className="w-full h-200 bg-white border border-gray-200 rounded-sm max-h-200 overflow-x-auto pt-4">
                            {allNotifications.filter(item => item.status === "unread").map((notif, index) => (
                                <NotificationCard
                                    key={index}
                                    notification={notif}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-left font-jukarta">
                        <p className='text-xl font-semibold text-gray-800 mb-2.5'>Read ({readCount})</p>
                        <div className="w-full  overflow-x-auto bg-white border border-gray-200 max-h-200 overflow-x-auto rounded-sm pt-4">
                            {allNotifications.filter(item => item.status === "read").map((notif, index) => (
                                <NotificationCard
                                    key={index}
                                    notification={notif}
                                    onToggleRead={() => toggleRead(index)}
                                    onToggleFav={() => toggleFav(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-left font-jukarta">
                        <p className='text-xl font-semibold text-gray-800 mb-2.5'>Marked ({markedCount})</p>
                        <div className="w-full h-200 bg-white border border-gray-200 rounded-sm max-h-200 overflow-x-auto pt-4">
                            {allNotifications.filter(item => item.marked === true).map((notif, index) => (
                                <NotificationCard
                                    key={index}
                                    notification={notif}
                                    onToggleRead={() => toggleRead(index)}
                                    onToggleFav={() => toggleFav(index)}
                                />
                            ))}
                        </div>
                    </div>

                </div> */}

                <div className="flex flex-col gap-5 ">
                    <div className="text-left font-jukarta flex-1">
                        {/* <p className='text-xl font-semibold text-gray-800 mb-2.5'>Unread ({unreadCount})</p> */}


                        <div tabindex="0" className="collapse collapse-arrow bg-white border-gray-200 border overflow-hidden rounded-none">
                            <div className="collapse-title bg-white font-semibold border border-gray-200 flex">

                                <div className="flex flex-1">
                                    <p className='bg-blue-400 h-6 w-6 flex justify-center items-center rounded-sm mr-2'><Mail size={16} strokeWidth={2.5} color='white' /></p>
                                    <p>Unread ({unreadCount})</p>
                                </div>
                            </div>
                            <div className="collapse-content text-sm bg-white ">
                                <div className="pt-2">

                                    {allNotifications.filter(item => item.status === "unread").map((notif, index) => (
                                        <NotificationCard
                                            key={index}
                                            notification={notif}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left font-jukarta  flex-1">
                        <div tabindex="1" className="collapse collapse-arrow border-gray-200 border rounded-none">
                            <div className="collapse-title  font-semibold border border-gray-200 flex justify-between bg-white ">
                                <div className="flex flex-1">
                                    <p className='bg-green-400 h-6 w-6 flex justify-center items-center rounded-sm mr-2'><Check size={18} strokeWidth={3} color='white' /></p>
                                    <p>Read ({readCount})</p>
                                </div>

                            </div>
                            <div className="collapse-content text-sm bg-white">
                                <div className="pt-2.5">
                                    {allNotifications.filter(item => item.status === "read").map((notif, index) => (
                                        <NotificationCard
                                            key={index}
                                            notification={notif}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="text-left font-jukarta  flex-1">
                        <div tabindex="2" className="collapse collapse-arrow peer-checked:rotate-180 bg-white border-gray-200 border rounded-none">
                            <div className="collapse-title bg-white font-semibold border border-gray-200 flex">
                                <div className="flex flex-1">
                                    <p className='bg-yellow-400 h-6 w-6 flex justify-center items-center rounded-sm mr-2'><Star className='fill-white' size={16} strokeWidth={2.5} color='white' /></p>
                                    <p>Marked ({markedCount})</p>
                                </div>
                                {/* <div className="flex-1 flex justify-end -mr-12">
                                    <p className=' h-6 w-6 flex justify-center items-center rounded-sm mr-2'><ChevronRight size={18} strokeWidth={3} color='black' /></p>
                                </div> */}

                            </div>
                            <div className="collapse-content text-sm bg-white">
                                <div className="pt-2.5">
                                    {allNotifications.filter(item => item.marked === true).map((notif, index) => (
                                        <NotificationCard
                                            key={index}
                                            notification={notif}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Notification;