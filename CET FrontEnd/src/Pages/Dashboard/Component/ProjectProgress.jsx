import { Loader, PackageX, TriangleAlert } from 'lucide-react';
import React from 'react';

const ProjectProgress = () => {
    return (
        <div className='bg-white border flex-1 border-gray-200 rounded-sm p-5'>
            <div className="text-left">
                <h2 className='text-lg font-jukarta font-semibold'>Project Progress</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2.5 mt-5 *:cursor-pointer *:hover:shadow-xs *:transition-transform *:duration-300">


                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
                    <div className="">
                        <Loader size={26} className='text-indigo-600'/>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
                            <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>Project Asana</h3>
                            <p className='font-semibold text-md'>50%</p>
                        </div>
                        <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
                            <div className='bg-green-400 h-[7px] rounded-sm w-[50%]'> </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
                    <div className="">
                        <PackageX size={26} className='text-red-600'/>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
                            <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>WebDev Code Market</h3>
                            <p className='font-semibold text-md'>90%</p>
                        </div>
                        <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
                            <div className='bg-red-500 h-[7px] rounded-sm w-[90%]'> </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
                    <div className="">
                        <Loader size={26} className='text-indigo-600'/>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
                            <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>bKash Mobile App UI Design</h3>
                            <p className='font-semibold text-md'>75%</p>
                        </div>
                        <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
                            <div className='bg-green-400 h-[7px] rounded-sm w-[75%]'> </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-3 gap-2 max-w-[400px] ">
                    <div className="">
                        <TriangleAlert size={26} className='text-yellow-600'/>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between gap-1 flex-1 w-full font-jukarta text-md">
                            <h3 className='max-w-[400px] text-md  line-clamp-1 font-semibold text-left'>Rocket App Backend Developement</h3>
                            <p className='font-semibold text-md'>80%</p>
                        </div>
                        <div className='w-full h-[7px] rounded-sm bg-gray-200 flex justify-between items-center text-xs text-gray-700'>
                            <div className='bg-green-400 h-[7px] rounded-sm w-[80%]'> </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default ProjectProgress;