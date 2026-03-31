import { Ellipsis, MessagesSquare, Paperclip } from 'lucide-react';
import React, { useState } from 'react';

const SingleToDo = ({ setShowDetails }) => {

    // const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="cursor-pointer" onClick={() => setShowDetails(true)}>
            <div className="bg-white rounded-lg p-4 mb-4 flex flex-col gap-1.5 font-jukarta">
                {/* <div className="flex items-center justify-end gap-2">
                    <div className="bg-indigo-200 flex items-center gap-1 px-2 rounded-sm py-0.5 text-indigo-600">
                        <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                        <p className='text-sm'>Not Assigned</p>
                    </div>
                    <div className="relative hidden">
                        <button>
                            <Ellipsis size={18} className='cursor-pointer' onClick={() => {
                                setShowDetails(false)
                                setShowOptions(!showOptions)
                            }} />
                        </button>

                        <div className={`"border border-gray-300 rounded-md p-2 absolute bg-white shadow-md right-0 top-5 z-10 w-40 flex flex-col gap-1 *:hover:bg-gray-100 *:p-1" ${showOptions ? "block" : "hidden"}`}>
                            <p className='text-sm text-gray-500'>Edit Task</p>
                            <p className='text-sm text-gray-500'>Delete Task</p>
                        </div>
                    </div>
                </div> */}

                <div className="text-left mt-0">
                    <h2 className='text-lg font-semibold'>Design Homepage Wireframe</h2>

                    <p className='text-sm line-clamp-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic fugit quo est, nam beatae perferendis? Dolorem odio totam nemo.</p>
                </div>

                <div className="flex justify-between items-center mt-2">
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

                <div className="h-0.5 w-full bg-gray-200  mt-2"></div>

                <div className="flex justify-between items-center">
                    <div className="">
                        <p className='flex text-sm text-gray-500 items-center gap-2'><MessagesSquare size={16} /> 10 Comments</p>
                    </div>
                    <div className="">
                        <p className='flex text-sm text-gray-500 items-center gap-2'><Paperclip size={16} /> 3 Attachments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToDo;