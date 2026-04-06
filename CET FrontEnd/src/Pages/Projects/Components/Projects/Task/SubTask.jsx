import React, { useEffect } from 'react';

import { X, Clock, Star, MoreVertical, Calendar, Tag, Users, Info, CirclePlus, SquarePen, Image, File, Trash2 } from "lucide-react";

const SubTask = ({ showSubDetails, setShowSubDetails, selectedSubTask }) => {

    console.log("ENTERED SUBTASK")
    useEffect(() => {
        console.log("Updated:", selectedSubTask)
    }, [selectedSubTask])


    // console.log("Sub Task Details", selectedSubTask);
    return (
        <div className={`flex items-center justify-end pr-5 font-sans w-screen h-screen bg-black/50 font-jukarta absolute top-0 right-0 z-100 ${showSubDetails || "hidden"}`}
        >
            {/* CARD */}
            <div className="w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 max-h-[800px] overflow-y-auto font-jukarta">

                {/* HEADER */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
                    <button className="text-gray-500 hover:text-black hover:scale-110 cursor-pointer transition duration-200" onClick={() => setShowSubDetails(false)}>
                        <X size={18} className='hover:scale-110 transition duration-200' />
                    </button>

                    <div className="flex gap-5">
                        <div className="flex gap-3 text-gray-500 cursor-pointer">
                            <SquarePen size={18} className='hover:scale-110 hover:text-indigo-500 transition duration-200' />
                        </div>
                        <div className="flex gap-3 text-gray-500 cursor-pointer">
                            <Trash2 size={18} className='hover:scale-110 hover:text-red-500 transition duration-200' />
                        </div>
                    </div>
                </div>

                {/* BODY */}
                <div className="p-6 space-y-5">

                    {/* TITLE */}
                    <div className="">
                        <h2 className="text-sm text-left text-gray-500">
                            {selectedSubTask ? selectedSubTask.projectName : "Sub Task Title"}
                            {/* {selectedSubTask ? selectedSubTask : "Sub Task Title"} */}
                        </h2>
                        <h2 className="text-lg font-semibold text-left">
                            {selectedSubTask ? selectedSubTask.subTitle : "Sub Task Title"}
                        </h2>
                    </div>


                    {/* DESCRIPTION */}
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-left text-gray-600">
                        <p className="mb-2 text-gray-700 font-semibold">
                            Project Description
                        </p>

                        <pre className="whitespace-pre-wrap break-words leading-relaxed font-jukarta">
                            Design a modern, responsive homepage that clearly communicates the brand’s identity and value. The layout should include a clean hero section with a strong headline and call-to-action, followed by sections for features, services, testimonials, and a footer. Focus on intuitive navigation, visually appealing UI, and consistent spacing, colors, and typography. Ensure the design is mobile-friendly and optimized for performance and user experience.
                        </pre>
                    </div>

                </div>




                {/* ATTACHMENTS */}
                <div className="">
                    <div className="border-t border-[#e5e7eb] px-6 pt-3 flex justify-between items-center">
                        <div className="flex gap-6 text-sm text-gray-500">
                            <button className="border-b-2 border-indigo-500 pb-1 text-indigo-600 text-sm">
                                Attachments
                            </button>
                        </div>
                        <button className=" pb-2 text-indigo-600 flex items-center gap-1 cursor-pointer">
                            <CirclePlus size={16} />
                            <p className="text-sm">Add Attachment</p>
                        </button>
                    </div>



                    <div className="px-6 py-4 space-y-5 text-sm">

                        <div className="grid grid-cols-4 gap-2 justify-items-center">
                            <div className="flex items-center bg-indigo-300/50 px-2 py-1 rounded text-indigo-800 text-sm w-max gap-2 cursor-pointer">
                                <p><Image size={16} /></p>
                                <p>Image Name</p>
                            </div>

                            <div className="flex items-center bg-indigo-300/50 px-2 py-1 rounded text-indigo-800 text-sm w-max gap-2 cursor-pointer">
                                <p><File size={16} /></p>
                                <p>File Name</p>
                            </div>

                            <div className="flex items-center bg-indigo-300/50 px-2 py-1 rounded text-indigo-800 text-sm w-max gap-2 cursor-pointer">
                                <p><Image size={16} /></p>
                                <p>Image Name</p>
                            </div>

                            <div className="flex items-center bg-indigo-300/50 px-2 py-1 rounded text-indigo-800 text-sm w-max gap-2 cursor-pointer">
                                <p><File size={16} /></p>
                                <p>File Name</p>
                            </div>

                        </div>

                    </div>

                </div>



                {/* COMMENT */}
                <div className="">
                    <div className="border-t border-[#e5e7eb] px-6 pt-3">
                        <div className="flex gap-6 text-sm text-gray-500">
                            <button className="border-b-2 border-indigo-500 pb-1 text-sm text-indigo-600">
                                Comments
                            </button>
                        </div>
                    </div>


                    <div className="px-6 pt-3 font-jukarta">
                        <div className=" px-2  py-1.5 mb-2 rounded-lg">
                            <form action="">
                                <fieldset className="fieldset  text-left relative" >
                                    <legend className="fieldset-legend text-black gap-1 justify-center items-center flex">
                                        <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                        <p className='text-[14px]'>Foysa Hossain</p>
                                    </legend>
                                    <textarea className="textarea h-30 w-full bg-white border border-gray-500/20" placeholder="Write your thought.."></textarea>
                                    <button class="absolute bottom-2.5 right-2 w-15 bg-indigo-200 text-indigo-800 font-semibold text-[14px] p-1.5 rounded-sm cursor-pointer z-10" type='submit'>Post</button>
                                </fieldset>
                            </form>
                        </div>


                        <div className="flex flex-col gap-4 mb-5">
                            <div className="text-left">

                                {/* MAIN COMMENT */}
                                <div className=" p-2 rounded-lg">

                                    <div className="">
                                        <div className="flex gap-1 justify-between items-center ">
                                            <div className="flex items-center gap-1">
                                                <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                                <p className='text-[14px]'>Foysa Hossain</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <p className='text-[14px]'>Oct 16, 2026</p>
                                                <p className='text-[14px]'>10:41 AM</p>
                                            </div>
                                        </div>

                                        <p className='text-sm text-left mt-1 ml-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia, dolores cumque ratione iusto dolore ab quas mollitia nihil minima?</p>

                                    </div>


                                    {/* SUB COMMENTS */}

                                    <div className="pl-5 mt-2">
                                        <div className="border-l border-gray-300 pl-4">
                                            <div className="flex gap-1 justify-between items-center ">
                                                <div className="flex items-center gap-1">
                                                    <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                                    <p className='text-[14px]'>Foysa Hossain</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[14px]'>Oct 16, 2026</p>
                                                    <p className='text-[14px]'>10:41 AM</p>
                                                </div>
                                            </div>

                                            <p className='text-sm text-left mt-1 ml-7 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia, dolores cumque ratione iusto dolore ab quas mollitia nihil minima?</p>

                                        </div>


                                        <div className="border-l border-gray-300 pl-4">
                                            <div className="flex gap-1 justify-between items-center ">
                                                <div className="flex items-center gap-1">
                                                    <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                                    <p className='text-[14px]'>Foysa Hossain</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[14px]'>Oct 16, 2026</p>
                                                    <p className='text-[14px]'>10:41 AM</p>
                                                </div>
                                            </div>

                                            <p className='text-sm text-left mt-1 ml-7 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia, dolores cumque ratione iusto dolore ab quas mollitia nihil minima?</p>

                                        </div>


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

export default SubTask;