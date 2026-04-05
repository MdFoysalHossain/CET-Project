import React from 'react';

const UpcomingCalanderEvents = () => {
    return (
        <div className='bg-white border border-gray-200 p-4 mt-5 rounded-sm'>
            <div className="font-jukarta text-lg font-semibold text-left">
                <div className="">
                    <h2>Todays Calendar Events</h2>
                    <p className='text-sm text-gray-500'>5 April, 2026</p>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2.5">
                    
                    <div className="flex flex-col justify-start items-start gap-3 mb-3 border border-gray-200 rounded-sm p-3">
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <p className='text-sm font-jukarta font-semibold'>Live Push of WebDev</p>
                        </div>
                        <div className="">
                            <p className='text-sm font-jukarta font-semibold'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, animi!
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-start items-start gap-3 mb-3 border border-gray-200 rounded-sm p-3">
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <p className='text-sm font-jukarta font-semibold'>Meeting with Team</p>
                        </div>
                        <div className="">
                            <p className='text-sm font-jukarta font-semibold'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt impedit quae amet atque enim similique corrupti ea quis rerum!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-3 mb-3 border border-gray-200 rounded-sm p-3">
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <p className='text-sm font-jukarta font-semibold'>QA Test Meeting</p>
                        </div>
                        <div className="">
                            <p className='text-sm font-jukarta font-semibold'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt aliquam natus dolore repellendus ipsa.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default UpcomingCalanderEvents;