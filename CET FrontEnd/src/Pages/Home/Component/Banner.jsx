import React from 'react';
import NavbarHome from './NavbarHome';
import CalanderImage from "/Ui/Calander.png"
import MacImage from "/mac.png"
import HomeImage from "/Home.png"
import { Link } from 'react-router';

const Banner = () => {

    const images = [
        {
            src: CalanderImage,
            position: "top-10 left-0",
            width: "320px",
        },
        {
            src: CalanderImage,
            position: "top-0 right-10",
            width: "380px",
        },
        {
            src: CalanderImage,
            position: "bottom-20 left-24",
            width: "280px",
        },
        {
            src: CalanderImage,
            position: "bottom-0 right-0",
            width: "360px",
        },
    ];
    return (
        <div className="relative overflow-hidden">

            {/* Background Shape */}
            <div className="absolute top-10 right-[-400px] h-[1200px] w-[1200px] rounded-bl-[200px] rotate-45 bg-indigo-400/70 overflow-hidden">

                {/* texture layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/textures/noise.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "250px 250px",
                        opacity: 0.25,
                        mixBlendMode: "overlay",
                    }}
                />

            </div>

            {/* Content Container */}
            <div className="relative w-[1330px] mx-auto">
                <div className="h-screen flex  items-center justify-center ">
                    <div className="text-left flex flex-col gap-5">
                        <p className="text-4xl font-semibold font-jukarta w-[700px] text-center -mt-50">
                            <span className='text-indigo-500'>ProjectNext</span> <span> helps teams organize projects, collaborate faster,
                                and deliver work on time with a clean and powerful workspace.</span>
                        </p>
                        <div className="text-center">
                            <Link to={"/Login"} className="rounded-full cursor-pointer bg-indigo-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600">
                                Get Started
                            </Link>
                        </div>
                        <div className="flex flex-col font-jukarta mt-5 hidden">
                            <span className='text-2xl'>What you can do with <span className='text-indigo-500 font-bold'>ProjectNext</span>,</span>
                            <span class="text-rotate text-2xl  text-left">
                                <span class="justify-items-start *:hover:text-indigo-500 *:font-semibold">
                                    <span>#1 Handle Project</span>
                                    <span>#2 Track Each Task</span>
                                    <span>#3 Communicate</span>
                                    <span>#4 Create & Handle Event</span>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="absolute bottom-10 w-full flex justify-center">
                        <div className="scale-120 relative">
                            <img src={MacImage} alt="" />
                            <div className="bg-white absolute top-1 left-16 h-80 w-123 -z-10 flex justify-center items-center">
                                <img
                                    src={HomeImage}
                                    alt=""
                                    className="h-full object-contain"
                                />
                            </div>
                            <div className="bg-white border-[1.75px] absolute border-indigo-500 text-indigo-600 p-2 px-4 font-jukarta font-semibold inline z-1000 scale-120 top-10 -left-0">
                                <span>Handle Project</span>
                            </div>
                            <div className="bg-white border-[1.75px] absolute border-indigo-500 text-indigo-600 p-2 px-4 font-jukarta font-semibold inline z-1000 scale-120 top-50 -left-10">
                                <span>Track Each Task</span>
                            </div>
                            <div className="bg-white border-[1.75px] absolute border-indigo-500 text-indigo-600 p-2 px-4 font-jukarta font-semibold inline z-1000 scale-120 top-65 -right-30">
                                <span>Communicate With Client</span>
                            </div>
                            <div className="bg-white border-[1.75px] absolute border-indigo-500 text-indigo-600 p-2 px-4 font-jukarta font-semibold inline z-1000 scale-120 top-25 -right-30">
                                <span>Create & Handle Event</span>
                            </div>
                        </div>
                    </div>


                    <div className="absolute hidden -right-100 mt-50 h-150 w-200 grid grid-cols-2  flex-1  ">
                        <div className="perspective-[1200px] w-[400px] absolute scale-150 z-10">
                            <img
                                src={CalanderImage}
                                alt="UI Preview"
                                className="
                                w-[400px] max-w-full
                                transform
                                rotate-x-[50deg]
                                -rotate-z-[5deg]
                                drop-shadow-2xl
                                transition-all duration-500
                                hover:rotate-x-[0deg]
                                hover:rotate-z-0
                                hover:scale-150
                            "
                            />
                        </div>
                        <div className="perspective-[1200px] w-[400px] absolute top-50 scale-150 hover:z-100">
                            <img
                                src={CalanderImage}
                                alt="UI Preview"
                                className="
                                w-[400px] max-w-full
                                transform
                                rotate-x-[45deg]
                                -rotate-z-[5deg]
                                drop-shadow-2xl
                                transition-all duration-500
                                hover:rotate-x-[0deg]
                                hover:rotate-z-0
                                hover:scale-150
                            "
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="">
                    <div className="bg-gray-100 flex items-center justify-center">
                        <img
                            src={CalanderImage}
                            alt="UI Preview"
                            className="w-[700px] object-contain drop-shadow-2xl rounded-xl"
                        />
                    </div>
                </div> */}


                <div className="min-h-screen hidden flex items-center justify-center">
                    <div className="perspective-[1200px]">
                        <img
                            src={CalanderImage}
                            alt="UI Preview"
                            className="
                                w-[700px] max-w-full
                                transform
                                rotate-x-[30deg]
                                -rotate-z-[5deg]
                                drop-shadow-2xl
                                transition-all duration-500
                                hover:rotate-x-[0deg]
                                hover:rotate-z-0
                                hover:scale-200
                            "
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;