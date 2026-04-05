import { Loader, Package, PackageCheck, PackageOpen, PackageX, TriangleAlert } from 'lucide-react';
import React from 'react';

const ProjectsCounting = () => {
    return (
        <div className='flex flex-col gap-2.5 bg-white p-5 rounded-sm border border-[#e5e7eb]'>
            <div className="">
                <div className="text-left">
                    <h2 className='text-lg font-jukarta font-semibold mb-2.5'>Projects & Tasks Counting</h2>
                </div>
                <div className="grid grid-cols-5 gap-8 justify-center items-center  flex-1 text-left">
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-6 font-jukarta relative">
                        <div className=' mt-5 font-rubik flex items-center justify-start gap-2'>
                            <Package size={25} className='text-gray-600' />
                            <p className='text-4xl '>9</p>
                        </div>
                        <p className='absolute top-2 left-2 text-sm font-semibold uppercase flex items-center gap-2 text-gray-600'> Total Projects</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-6 font-jukarta relative">
                        <div className=' mt-5 font-rubik flex items-center justify-start gap-2'>
                            <Loader size={25} className='text-indigo-600' />
                            <p className='text-4xl '>4</p>
                        </div>
                        <p className='absolute top-2 left-2 text-sm font-semibold uppercase flex items-center gap-2 text-gray-600'> Ongoing Projects</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-6 font-jukarta relative">
                        <div className=' mt-5 font-rubik flex items-center justify-start gap-2'>
                            <PackageCheck size={25} className='text-green-600' />
                            <p className='text-4xl '>2</p>
                        </div>
                        <p className='absolute top-2 left-2 text-sm font-semibold uppercase flex items-center gap-2 text-gray-600'> Delivered Projects</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-6 font-jukarta relative">
                        <div className=' mt-5 font-rubik flex items-center justify-start gap-2'>
                            <TriangleAlert size={25} className='text-yellow-500' />
                            <p className='text-4xl '>1</p>
                        </div>
                        <p className='absolute top-2 left-2 text-sm font-semibold uppercase flex items-center gap-2 text-gray-600'> Near Deadline</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-6 font-jukarta relative">
                        <div className=' mt-5 font-rubik flex items-center justify-start gap-2'>
                            <PackageX size={25} className='text-red-600' />
                            <p className='text-4xl '>2</p>
                        </div>
                        <p className='absolute top-2 left-2 text-sm font-semibold uppercase flex items-center gap-2 text-gray-600'> Missed Deadline</p>
                    </div>

                </div>
            </div>

            <div className="">
                {/* <div className="text-left">
                    <h2 className='text-lg font-jukarta font-semibold mb-2.5'>Tasks Counting</h2>
                </div> */}
                <div className="flex  gap-2 justify-center items-center ">
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-2 flex justify-between items-center gap-5 w-full">
                        <p className='text-md font-semibold  font-jukarta '>Total Tasks</p>
                        <p className='text-lg font-rubik '>0</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-2 flex justify-between items-center gap-5 w-full">
                        <p className='text-md font-semibold  font-jukarta '>Overdue Tasks</p>
                        <p className='text-lg font-rubik '>0</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-2 flex justify-between items-center gap-5 w-full">
                        <p className='text-md font-semibold  font-jukarta '>Task In Progress</p>
                        <p className='text-lg font-rubik '>0</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-2 flex justify-between items-center gap-5 w-full">
                        <p className='text-md font-semibold  font-jukarta '>Task Completed</p>
                        <p className='text-lg font-rubik '>0</p>
                    </div>
                    <div className="border bg-white border-[#e5e7eb] rounded-sm p-2 flex justify-between items-center gap-5 w-full">
                        <p className='text-md font-semibold  font-jukarta '>Task Halt</p>
                        <p className='text-lg font-rubik '>0</p>
                    </div>
                </div>

                <div className="text-left mt-5 font-jukarta text-sm flex flex-col  items-start gap-1 hidden">
                    <p>⚠️ 3 Projects Need Attention</p>
                    <p>⚠️ 2 Projects Missed Deadlines</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCounting;