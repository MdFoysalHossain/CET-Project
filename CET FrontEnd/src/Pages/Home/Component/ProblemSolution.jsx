// import { ActivityIcon, Blend, Brain, BringToFront, ClipboardClock, HeadphoneOff, Layers, LayoutDashboard, Loader, Radio, Zap } from 'lucide-react';
// import React from 'react';
// import TooMany from "/Too_Many_Options.svg"

// const ProblemSolution = () => {
//     return (
//         <div className='w-[1330px] mx-auto mt-20'>
//             <div className="font-jukarta text-4xl font-bold flex items-center justify-center mb-5">
//                 <div className="">
//                     <h2>Purpose</h2>
//                     <div className="flex justify-between mt-2.5">
//                         <div className="h-1 w-10 rounded-full bg-indigo-400 relative">
//                             <div className="h-2.5 w-2.5 rounded-full bg-indigo-400 absolute -right-2 -top-[3px]"></div>
//                         </div>
//                         <ActivityIcon className='-mt-2.5 text-indigo-400' strokeWidth={2} />
//                         <div className="h-1 w-10 rounded-full bg-indigo-400 relative">
//                             <div className="h-2.5 w-2.5 rounded-full bg-indigo-400 absolute -left-2 -top-[3px]"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex my-10">
//                 <div className=" text-left">
//                     <h2 className='text-2xl font-semibold font-jukarta mb-2'>Problems</h2>

//                     <div className="flex gap-2 p-2 border-2 rounded-xl border-indigo-400 w-[350px]">
//                         <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                             {/* <p>1</p> */}
//                             <ClipboardClock />
//                         </div>
//                         <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                             <p>Missed deadlines</p>
//                         </div>
//                     </div>

//                     <div className="flex gap-2 p-2 mt-5 border-2 rounded-xl border-indigo-400 w-[350px]">
//                         <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                             {/* <p>2</p> */}
//                             <HeadphoneOff />
//                         </div>
//                         <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                             <p>Scattered communication</p>
//                         </div>
//                     </div>

//                     <div className="flex gap-2 p-2 mt-5 border-2 rounded-xl border-indigo-400 w-[350px]">
//                         <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                             {/* <p>3</p> */}
//                             <Loader />
//                         </div>
//                         <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                             <p>Hard to track progress</p>
//                         </div>
//                     </div>

//                     <div className="flex gap-2 p-2 mt-5 border-2 rounded-xl border-indigo-400 w-[350px]">
//                         <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                             {/* <p>4</p> */}
//                             <Blend />
//                         </div>
//                         <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                             <p>Too many tools</p>
//                         </div>
//                     </div>
//                 </div>



//                 <div className="flex-1 flex items-center justify-center">
//                     <img src={TooMany} className='w-80' alt="" />
//                 </div>



//                 <div className=" text-right">
//                     <h2 className='text-2xl font-semibold font-jukarta mb-2'>Solutions</h2>
//                     <div className="flex flex-col items-end">

//                         <div className="flex justify-end gap-2 p-2 border-2 rounded-xl border-indigo-400 w-[350px]">

//                             <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                                 <p>Centralized workspace</p>
//                             </div>
//                             <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                                 {/* <p>1</p> */}
//                                 <Layers />
//                             </div>
//                         </div>

//                         <div className="flex justify-end gap-2 p-2 mt-5 border-2 rounded-xl border-indigo-400 w-[350px]">
                            
//                             <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                                 <p>Real-time collaboration</p>
//                             </div>
//                             <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                                 {/* <p>2</p> */}
//                                 <Radio />
//                             </div>
//                         </div>

//                         <div className="flex justify-end gap-2 p-2 mt-5 border-2 rounded-xl border-indigo-400 w-[350px]">
                            
//                             <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                                 <p>Smart task tracking</p>
//                             </div>
//                             <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                                 {/* <p>3</p> */}
//                                 <Brain />
//                             </div>
//                         </div>

//                         <div className="flex justify-end gap-2 p-2 mt-5 border-2 rounded-xl border-indigo-400 w-[350px]">
                           
//                             <div className=" text-black font-jukarta text-xl flex items-between justify-between mt-1 ">
//                                 <p>Clean dashboards</p>
//                             </div>
//                              <div className="bg-indigo-400 rounded-xl h-10 w-10 flex justify-center items-center text-white font-jukarta text-2xl">
//                                 {/* <p>4</p> */}
//                                 <LayoutDashboard />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ProblemSolution;









// import { ActivityIcon, Brain, ClipboardClock, HeadphoneOff, Layers, LayoutDashboard, Loader, Radio, Blend, ArrowRight } from 'lucide-react';
// import React from 'react';
// import TooMany from "/Too_Many_Options.svg";

// const ProblemSolution = () => {
//     const problems = [
//         { icon: <ClipboardClock size={20} />, text: "Missed deadlines" },
//         { icon: <HeadphoneOff size={20} />, text: "Scattered communication" },
//         { icon: <Loader size={20} />, text: "Hard to track progress" },
//         { icon: <Blend size={20} />, text: "Too many tools" },
//     ];

//     const solutions = [
//         { icon: <Layers size={20} />, text: "Centralized workspace" },
//         { icon: <Radio size={20} />, text: "Real-time collaboration" },
//         { icon: <Brain size={20} />, text: "Smart task tracking" },
//         { icon: <LayoutDashboard size={20} />, text: "Clean dashboards" },
//     ];

//     return (
//         <section className='max-w-[1200px] mx-auto py-24 px-4 font-jukarta'>
//             {/* Header Section */}
//             <div className="text-center mb-20">
//                 <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4 border border-indigo-100">
//                     <ActivityIcon size={16} />
//                     <span>OUR MISSION</span>
//                 </div>
//                 <h2 className='text-5xl font-extrabold text-slate-900 tracking-tight'>
//                     Purpose-built for <span className="text-indigo-500">clarity.</span>
//                 </h2>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
//                 {/* Left Side: Problems */}
//                 <div className="lg:col-span-4 space-y-6">
//                     <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-8">The Friction</h3>
//                     {problems.map((item, i) => (
//                         <div key={i} className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-indigo-50/30 transition-all duration-300">
//                             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
//                                 {item.icon}
//                             </div>
//                             <p className="text-lg font-medium text-slate-600">{item.text}</p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Center: Visual Anchor */}
//                 <div className="lg:col-span-4 flex justify-center relative">
//                     {/* Animated background glow */}
//                     <div className="absolute inset-0 bg-indigo-200 blur-[100px] opacity-20 rounded-full"></div>
//                     <img src={TooMany} className='w-full max-w-[320px] relative z-10 drop-shadow-2xl' alt="Team Illustration" />
//                 </div>

//                 {/* Right Side: Solutions */}
//                 <div className="lg:col-span-4 space-y-6">
//                     <h3 className="text-lg font-bold text-indigo-400 uppercase tracking-widest mb-8 lg:text-right">The Solution</h3>
//                     {solutions.map((item, i) => (
//                         <div key={i} className="group flex items-center lg:flex-row-reverse gap-4 p-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
//                             <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
//                                 {item.icon}
//                             </div>
//                             <p className="text-lg font-bold text-slate-800 lg:text-right flex-1">{item.text}</p>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default ProblemSolution;






import { ActivityIcon, Brain, ClipboardClock, HeadphoneOff, Layers, LayoutDashboard, Loader, Radio, Blend } from 'lucide-react';
import React from 'react';
import TooMany from "/Too_Many_Options.svg";

const ProblemSolution = () => {
    const problems = [
        { icon: <ClipboardClock size={20} />, text: "Missed deadlines" },
        { icon: <HeadphoneOff size={20} />, text: "Scattered communication" },
        { icon: <Loader size={20} />, text: "Hard to track progress" },
        { icon: <Blend size={20} />, text: "Too many tools" },
    ];

    const solutions = [
        { icon: <Layers size={20} />, text: "Centralized workspace" },
        { icon: <Radio size={20} />, text: "Real-time collaboration" },
        { icon: <Brain size={20} />, text: "Smart task tracking" },
        { icon: <LayoutDashboard size={20} />, text: "Clean dashboards" },
    ];

    return (
        <section className='lg:max-w-[1330px]   max-w-[360px] lg:mx-auto py-12 md:py-24 px-6 font-jukarta overflow-hidden'>
            {/* Header Section - Responsive Text Sizes */}
            <div className="text-center mb-12 md:mb-20">
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs md:text-sm font-bold mb-4 border border-indigo-100">
                    <ActivityIcon size={16} />
                    <span className="uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight'>
                    Purpose-built for <span className="text-indigo-500">clarity.</span>
                </h2>
            </div>

            {/* Main Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                
                {/* Problems (The Friction) 
                    - Mobile: Order 1
                    - Desktop: Order 1 (Left)
                */}
                <div className="order-2 md:order-1 lg:col-span-4 space-y-4 md:space-y-6">
                    <h3 className="text-sm md:text-lg font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-8 text-center lg:text-left">
                        The Friction
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {problems.map((item, i) => (
                            <div key={i} className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-indigo-50/30 transition-all duration-300">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                                    {item.icon}
                                </div>
                                <p className="text-base md:text-lg font-medium text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="order-1 md:order-2 lg:col-span-4 flex justify-center relative py-8 lg:py-0">
                    <div className="absolute inset-0 bg-indigo-200 blur-[80px] md:blur-[100px] opacity-20 rounded-full"></div>
                    <img 
                        src={TooMany} 
                        className='w-full max-w-[240px] sm:max-w-[300px] lg:max-w-full relative z-10 drop-shadow-2xl transform transition-transform duration-700 hover:scale-105' 
                        alt="Illustration" 
                    />
                </div>


                <div className="order-3 md:order-3 lg:col-span-4 space-y-4 md:space-y-6">
                    <h3 className="text-sm md:text-lg font-bold text-indigo-400 uppercase tracking-widest mb-4 md:mb-8 text-center lg:text-right">
                        The Solution
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {solutions.map((item, i) => (
                            <div key={i} className="group flex items-center lg:flex-row-reverse gap-4 p-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <p className="text-base md:text-lg font-bold text-slate-800 text-left lg:text-right flex-1">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemSolution;