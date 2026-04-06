import { Ellipsis, MessagesSquare, Paperclip } from 'lucide-react';
import React, { useState } from 'react';

const SingleToDo = ({ todo, setShowDetails, selectedTask }) => {


    // console.log("Todo:",todo)
    return (
        <div className="cursor-pointer " onClick={() => setShowDetails(true)}>

            <div className={`bg-white rounded-lg p-4 pb-2 mb-4 flex flex-col gap-1.5 font-jukarta relative z-0 ${selectedTask?.id === todo?.id ? "z-20" : "z-0"} hover:scale-102 transition delay-75`}>
                <div className="absolute right-2 top-2 ">
                    <div className={`bg-indigo-200 flex items-center mt-1  p-1.5 rounded-sm ${todo?.priority === "High" ? "bg-red-200  " : todo?.priority === "Medium" ? "bg-yellow-200  ": "bg-indigo-200 " }`}>
                        <p className={`h-2 w-2 rounded-3xl ${todo?.priority === "High" ? "bg-red-600 " : todo?.priority === "Medium" ? "bg-yellow-600 ": "bg-indigo-600 " }`}></p>
                    </div>
                </div>

                <div className="text-left -mt-2  w-[92%]">
                    <h2 className='text-md font-semibold line-clamp-2'>{todo.title}</h2>

                    {/* <p className='text-sm line-clamp-2 text-gray-500'>{todo.description}</p> */}
                </div>

                <div className="flex justify-between items-center ">
                    <p className='text-sm text-gray-500'>Assigned To:</p>

                    <div className="flex items-center gap-1">
                        <div className="flex">
                            <div className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white"></div>
                            <div className="w-6 h-6 -ml-3 rounded-full bg-amber-500 border-2 border-white"></div>
                            <div className="w-6 h-6 -ml-3 rounded-full bg-amber-200 border-2 border-white"></div>
                        </div>

                        <p className='text-sm text-gray-500'>+ 2 More</p>
                    </div>
                </div>

                <div className="h-0.5 w-full bg-gray-200 "></div>

                <div className="flex justify-between items-center">
                    <div className="">
                        <p className='flex text-sm text-gray-500 items-center gap-2'><MessagesSquare size={16} /> {todo.comments.length} Comments</p>
                    </div>
                    <div className="">
                        <p className='flex text-sm text-gray-500 items-center gap-2'><Paperclip size={16} /> {todo.attachments.length} Attachments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToDo;