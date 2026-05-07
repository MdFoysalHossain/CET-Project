import React from 'react';

const MainTaskComment = () => {
    return (
        <div className="px-6 pt-3 font-jukarta max-h-[400px] overflow-auto">
            
            <div className="flex flex-col gap-4 mb-5">
                <div className="text-left">

                    {/* MAIN COMMENT */}
                    <div className=" p-2 rounded-lg">

                        <div className="">
                            <div className="flex gap-1 justify-between items-center ">
                                <div className="flex items-center gap-1">
                                    <p className='h-6 w-6 bg-indigo-200 rounded-lg'></p>
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
                                        <p className='h-6 w-6 bg-indigo-200 rounded-lg'></p>
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
    );
};

export default MainTaskComment;