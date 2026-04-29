import { Ellipsis, MessagesSquare, Paperclip } from 'lucide-react';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';

// import { SettingsContext } from '../../../../Context/SettingsProvidor';
// import { AuthContext } from '../../../../Context/AccountProvidor';

const SingleToDo = ({ todo, setShowDetails, selectedTask, setSelectedTask }) => {

    console.log("Task:", todo)
    return (
        <div className="cursor-pointer " onClick={() => {
            setSelectedTask(todo)
            setShowDetails(true)
        }}>

            <div className={`bg-white rounded-lg p-4 pb-2 mb-4 flex flex-col gap-1.5 font-jukarta relative z-0 ${selectedTask?.id === todo?.id ? "z-20" : "z-0"} hover:scale-102 transition delay-75`}>
                <div className="absolute right-2 top-2 ">
                    <div className={`bg-indigo-200 flex items-center mt-1  p-1.5 rounded-sm ${todo?.priority === "High" ? "bg-red-200  " : todo?.priority === "Medium" ? "bg-yellow-200  " : "bg-indigo-200 "}`}>
                        <p className={`h-2 w-2 rounded-3xl ${todo?.priority === "High" ? "bg-red-600 " : todo?.priority === "Medium" ? "bg-yellow-600 " : "bg-indigo-600 "}`}></p>
                    </div>
                </div>

                <div className="text-left -mt-2  w-[92%]">
                    <h2 className='text-md font-semibold line-clamp-2'>{todo.taskName}</h2>

                    {/* <p className='text-sm line-clamp-2 text-gray-500'>{todo.description}</p> */}
                </div>

                <div className="flex justify-between items-center ">
                    <p className='text-sm text-gray-500'>Assigned To:</p>

                    <div className="flex items-center justify-end gap-1 w-[150px]">
                        {
                            todo.assignees.map((User, ind) => (
                                ind < 3 &&
                                <div
                                    key={ind}
                                    className={`relative group w-6  h-6 rounded-full border-2 border-white flex justify-center items-center 
                                                                                            ${ind % 2 === 0 ? "bg-amber-200 -ml-3" : "bg-amber-400 -ml-3"}`}
                                >
                                    {/* Avatar */}
                                    <p className="font-jukarta capitalize text-[12px]">{User.username?.[0]}</p>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
                                                opacity-0 group-hover:opacity-100 transition-all duration-200 
                                                bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                                        @{User?.username}
                                    </div>
                                </div>
                            ))
                        }

                        <div className="-ml-3">
                            {
                                todo.assignees.length > 2 && (
                                    <p className="text-sm w-[70px] flex justify-center items-center -mr-2 text-gray-500 ml-2 font-jukarta">
                                        +{todo.assignees.length - 2} more
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="h-0.5 w-full bg-gray-200 "></div>

                <div className="flex justify-between items-center">
                    <div className="">
                        <p className='flex text-sm text-gray-500 items-center gap-2'><MessagesSquare size={16} /> 0 Comments</p>
                    </div>
                    <div className="">
                        <p className='flex text-sm text-gray-500 items-center gap-2'><Paperclip size={16} /> 0 Attachments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToDo;