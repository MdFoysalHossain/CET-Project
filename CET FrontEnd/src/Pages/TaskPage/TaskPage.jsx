import { Ellipsis, MessagesSquare, Paperclip, Plus } from 'lucide-react';
import React from 'react';

const TaskPage = () => {
    return (
        <div className="">
            <div className="">
                <div className="flex items-center justify-between px-6 border-b border-gray-200 h-[65px]">
                    <div className="max-w-[1330px] mx-auto w-full flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-semibold font-jukarta">My Tasks</p>

                            
                        </div>

                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-4 gap-4 mt-10 max-w-[1330px] mx-auto" >
                <div className="bg-gray-300/30 rounded-xl max-w-400 p-2 pb-0 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="text-left font-jukarta flex items-center gap-1.5 ml-2">
                            <p className='h-2.5 w-2.5 rounded-3xl bg-orange-400'></p>
                            <p className='text-lg'>To Do</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            {/* <Plus size={18} className='cursor-pointer' /> */}
                            {/* <Ellipsis size={18} className='cursor-pointer' /> */}
                        </div>
                    </div>


                    {/* ALL TO DO TASK */}
                    <div className="mt-4">
                        {/* <p className='text-sm text-gray-500 my-5'>No tasks available</p> */}

                        <div className="cursor-pointer">
                            <div className="bg-white rounded-lg p-4 mb-4 flex flex-col gap-1.5 font-jukarta relative">
                                {/* <div className="flex items-center justify-between gap-2">
                                <div className="bg-indigo-200 flex items-center gap-1 px-2 rounded-sm py-0.5 text-indigo-600">
                                    <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                                    <p className='text-sm'>Not Assigned</p>
                                </div>
                                <div className="">
                                    <Ellipsis size={18} className='cursor-pointer' />
                                </div>
                            </div> */}
                                <div className="absolute right-2 top-2 ">
                                    <div className="bg-indigo-200 flex items-center  p-1.5 rounded-sm text-indigo-600">
                                        <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                                    </div>
                                </div>

                                <div className="text-left mt-2">
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

                    </div>

                </div>




                {/* ALL TO DO TASK */}
                <div className="bg-gray-300/30 rounded-xl max-w-400 p-2 pb-0 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="text-left font-jukarta flex items-center gap-1.5 ml-2">
                            <p className='h-2.5 w-2.5 rounded-3xl bg-blue-400'></p>
                            <p className='text-lg'>In Progress</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            {/* <Plus size={18} className='cursor-pointer' /> */}
                            {/* <Ellipsis size={18} className='cursor-pointer' /> */}
                        </div>
                    </div>


                    <div className="mt-4">
                        {/* <p className='text-sm text-gray-500 my-5'>No tasks available</p> */}

                        <div className="cursor-pointer">
                            <div className="bg-white rounded-lg p-4 mb-4 flex flex-col gap-1.5 font-jukarta ">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="bg-indigo-200 flex items-center gap-1 px-2 rounded-sm py-0.5 text-indigo-600">
                                        <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                                        <p className='text-sm'>Not Assigned</p>
                                    </div>
                                    <div className="">
                                        <Ellipsis size={18} className='cursor-pointer' />
                                    </div>
                                </div>

                                <div className="text-left mt-2">
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

                    </div>

                </div>




                {/* ALL QA TASK */}
                <div className="bg-gray-300/30 rounded-xl max-w-400 p-2 pb-0 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="text-left font-jukarta flex items-center gap-1.5 ml-2">
                            <p className='h-2.5 w-2.5 rounded-3xl bg-purple-400'></p>
                            <p className='text-lg'>QA</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            {/* <Plus size={18} className='cursor-pointer' /> */}
                            {/* <Ellipsis size={18} className='cursor-pointer' /> */}
                        </div>
                    </div>


                    {/* ALL TO DO TASK */}
                    <div className="mt-4">
                        {/* <p className='text-sm text-gray-500 my-5'>No tasks available</p> */}

                        <div className="cursor-pointer">
                            <div className="bg-white rounded-lg p-4 mb-4 flex flex-col gap-1.5 font-jukarta ">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="bg-indigo-200 flex items-center gap-1 px-2 rounded-sm py-0.5 text-indigo-600">
                                        <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                                        <p className='text-sm'>Not Assigned</p>
                                    </div>
                                    <div className="">
                                        <Ellipsis size={18} className='cursor-pointer' />
                                    </div>
                                </div>

                                <div className="text-left mt-2">
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

                    </div>

                </div>




                {/* ALL Finished TASK */}
                <div className="bg-gray-300/30 rounded-xl max-w-400 p-2 pb-0 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="text-left font-jukarta flex items-center gap-1.5 ml-2">
                            <p className='h-2.5 w-2.5 rounded-3xl bg-green-400'></p>
                            <p className='text-lg'>Finished</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            {/* <Plus size={18} className='cursor-pointer' /> */}
                            {/* <Ellipsis size={18} className='cursor-pointer' /> */}
                        </div>
                    </div>


                    {/* ALL TO DO TASK */}
                    <div className="mt-4">
                        {/* <p className='text-sm text-gray-500 my-5'>No tasks available</p> */}

                        <div className="cursor-pointer">
                            <div className="bg-white rounded-lg p-4 mb-4 flex flex-col gap-1.5 font-jukarta ">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="bg-indigo-200 flex items-center gap-1 px-2 rounded-sm py-0.5 text-indigo-600 ">
                                        <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                                        <p className='text-sm'>Not Assigned</p>
                                    </div>
                                    <div className="">
                                        <Ellipsis size={18} className='cursor-pointer' />
                                    </div>
                                </div>

                                <div className="text-left mt-2">
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

                    </div>

                </div>





                <div className="bg-gray-300/30 rounded-xl max-w-400 p-2 pb-0 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="text-left font-jukarta flex items-center gap-1.5 ml-2">
                            <p className='h-2.5 w-2.5 rounded-3xl bg-red-400'></p>
                            <p className='text-lg'>Halt</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            {/* <Plus size={18} className='cursor-pointer' /> */}
                            {/* <Ellipsis size={18} className='cursor-pointer' /> */}
                        </div>
                    </div>


                    {/* ALL TO DO TASK */}
                    <div className="mt-4">
                        {/* <p className='text-sm text-gray-500 my-5'>No tasks available</p> */}

                        <div className="cursor-pointer">
                            <div className="bg-white rounded-lg p-4 mb-4 flex flex-col gap-1.5 font-jukarta ">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="bg-indigo-200 flex items-center gap-1 px-2 rounded-sm py-0.5 text-indigo-600">
                                        <p className='h-2 w-2 rounded-3xl bg-indigo-600'></p>
                                        <p className='text-sm'>Not Assigned</p>
                                    </div>
                                    <div className="">
                                        <Ellipsis size={18} className='cursor-pointer' />
                                    </div>
                                </div>

                                <div className="text-left mt-2">
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

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TaskPage;