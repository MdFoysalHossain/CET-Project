import { BookOpen, SquarePen, Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AllProjects = ({ showDetails, setShowDetails }) => {



    const totalTask = 20;
    const doneTask = 12;

    const progress = (doneTask / totalTask) * 100;

    return (
        <div className='max-w-[1330px] '>

            <div className="w-full mt-5 flex flex-col">

                <div className="grid grid-cols-3 gap-5">


                    
                    <Link to="/Dashboard/Projects/ProjectName"
                        // onClick={() => setShowDetails(true)}
                        className="w-full text-left relative bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start">

                            {/* Title Section */}
                            <div>
                                <p className="text-xs text-gray-400 font-semibold font-jukarta">#1 TicketId / UniqueID</p>
                                <h3 className="text-lg font-medium text-gray-800 font-rubik group-hover:text-main-color transition-colors duration-300">
                                    SSl BD Web Application
                                </h3>
                            </div>

                            {/* Priority Badge */}
                            <div className="flex items-center border border-amber-300 bg-amber-50 text-amber-600 rounded-full px-3 py-1 text-xs font-semibold">
                                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                                <span className='font-jukarta'>Priority</span>
                            </div>

                        </div>

                        {/* Date */}
                        <p className="text-sm text-gray-500 mt-2 font-jukarta ">
                            Due: 11 Dec, 2026
                        </p>

                        {/* Progress Section */}
                        <div className="mt-4 font-jukarta">

                            <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                                <p>Progress</p>
                                <p>{doneTask}/{totalTask} Tasks</p>
                            </div>

                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div
                                    style={{ width: `${progress}%` }}
                                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                                ></div>
                            </div>

                        </div>

                        {/* Bottom Section */}
                        <div className="flex justify-between items-center mt-5 gap-20">

                            {/* Team */}
                            <div className="flex items-center flex-">

                                <div className="flex">
                                    <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white"></div>
                                    <div className="w-8 h-8 -ml-3 rounded-full bg-amber-500 border-2 border-white"></div>
                                    <div className="w-8 h-8 -ml-3 rounded-full bg-amber-200 border-2 border-white"></div>
                                </div>

                                <p className="text-sm text-gray-500 ml-2 font-jukarta">+2 more</p>

                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 font-jukarta">

                                {/* <button className="flex items-center gap-1 text-xs border border-gray-200 px-2 py-1 rounded-lg hover:bg-gray-100">
                                    <BookOpen size={14} /> View
                                </button> */}

                                <button className="flex items-center gap-1 text-xs border border-gray-200 px-2 py-1 rounded-lg hover:bg-gray-100">
                                    <SquarePen size={14} /> Update
                                </button>

                                <button className="flex items-center gap-1 text-xs border border-red-200 text-red-500 px-2 py-1 rounded-lg hover:bg-red-50">
                                    <Trash2 size={14} /> Delete
                                </button>

                            </div>

                        </div>

                    </Link>






                </div>


            </div>

        </div>
    );
};

export default AllProjects;