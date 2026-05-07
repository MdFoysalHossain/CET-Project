// import React from 'react';
// import NavbarHome from './NavbarHome';
// import CalanderImage from "/Ui/Calander.png"
// import MacImage from "/mac.png"
// import CreateAccount from "/CreateAccount.png"
// import CreateEvent from "/CreateEvent.png"
// import CreateProject from "/CreateProject.png"
// import CreateTask from "/CreateTask.png"
// import HomeImage from "/Home.png"
// import { Link } from 'react-router';

// const Banner2 = () => {

//     return (
//         <div className="relative h-screen w-[99.2vw] overflow-hidden bg-[#f5f3ff]">
//             <div class="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
//             <div
//                 class="
//                     absolute inset-0
//                     bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)]
//                     bg-[size:60px_60px]
//                     mask-image-[radial-gradient(ellipse_at_center,black,transparent_80%)]
//     "
//             ></div>

//             {/* Background Shape */}
//             <div className="absolute hidden top-10 right-[-400px] h-[1200px] w-[1200px] rounded-bl-[200px] rotate-45 bg-indigo-400/70 overflow-hidden">

//                 {/* texture layer */}
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         backgroundImage: "url('/textures/noise.png')",
//                         backgroundRepeat: "repeat",
//                         backgroundSize: "250px 250px",
//                         opacity: 0.25,
//                         mixBlendMode: "overlay",
//                     }}
//                 />

//             </div>

//             {/* Content Container */}
//             <div className="relative w-[1330px] mx-auto">
//                 <div className="h-screen flex flex-col items-center justify-center ">
//                     <div className="text-left flex flex-col gap-5">
//                         <p className="text-4xl font-semibold font-jukarta w-[700px] text-center -mt-80">
//                             <span className='text-indigo-500'>TrackLio</span> <span> helps teams organize projects, collaborate faster,
//                                 and deliver work on time with a clean and powerful workspace.</span>
//                         </p>
//                         <div className="text-center">
//                             <Link to={"/Login"} className="rounded-full cursor-pointer bg-indigo-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600">
//                                 Get Started
//                             </Link>
//                         </div>

//                     </div>

//                     <div className="flex gap-5 absolute bottom-10">
//                         <div className="p-0.5 -mt-20 rounded-2xl">
//                             <img src={CreateEvent} className='rounded-2xl shadow-xl scale-90 opacity-80 w-[300px] object-contain' alt="" />
//                         </div>
//                         <div className="p-0.5  rounded-2xl">
//                             <img src={CreateAccount} className='rounded-2xl shadow-xl w-[300px] object-contain' alt="" />
//                         </div>
//                         <div className="p-0.5  rounded-2xl">
//                             <img src={CreateTask} className='rounded-2xl shadow-xl w-[300px] object-contain' alt="" />
//                         </div>
//                         <div className="p-0.5  -mt-20 rounded-2xl">
//                             <img src={CreateProject} className='rounded-2xl shadow-xl scale-90 opacity-80 w-[300px] object-contain' alt="" />
//                         </div>

//                     </div>


//                 </div>


//                 <div className="min-h-screen hidden flex items-center justify-center">
//                     <div className="perspective-[1200px]">
//                         <img
//                             src={CalanderImage}
//                             alt="UI Preview"
//                             className="
//                                 w-[700px] max-w-full
//                                 transform
//                                 rotate-x-[30deg]
//                                 -rotate-z-[5deg]
//                                 drop-shadow-2xl
//                                 transition-all duration-500
//                                 hover:rotate-x-[0deg]
//                                 hover:rotate-z-0
//                                 hover:scale-200
//                             "
//                         />
//                     </div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Banner2;








import React from 'react';
import { Link } from 'react-router';
import { MoveRight, Zap } from 'lucide-react';
import CreateAccount from "/CreateAccount.png";
import CreateEvent from "/CreateEvent.png";
import CreateProject from "/CreateProject.png";
import CreateTask from "/CreateTask.png";

const Banner2 = () => {
    return (
        <div className="relative min-h-screen w-[99.2vw] overflow-hidden bg-[#fbfaff] font-jukarta">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
                
                {/* Soft Radial Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/40 blur-[120px] rounded-full"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1330px] mx-auto px-6 pt-32 lg:pt-48 pb-20">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-500 text-xs font-bold mb-8 animate-fade-in">
                        <Zap size={14} fill="currentColor" />
                        <span className="tracking-wider uppercase">Now in Public Beta</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mb-8">
                        Organize projects. <br />
                        <span className="text-indigo-500">Collaborate faster.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 font-medium">
                        TrackLio helps teams deliver work on time with a clean and 
                        powerful workspace. Stop the chaos and start shipping.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-20">
                        <Link to="/Login" className="group flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1">
                            Get Started Free
                            <MoveRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </Link>
                        {/* <button className="px-8 py-4 text-lg font-bold text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
                            View Demo
                        </button> */}
                    </div>

                    {/* Staggered UI Feature Stack */}
                    <div className="relative w-full max-w-5xl mt-10 h-[400px] md:h-[500px]">
                        {/* Center Piece (The Focus) */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-30 shadow-2xl rounded-4xl  border border-white/50 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                            <img src={CreateAccount} className="w-[320px] md:w-[400px] rounded-4xl object-contain" alt="Dashboard" />
                        </div>

                        {/* Left Piece (Secondary) */}
                        <div className="absolute left-[5%] md:left-[15%] top-12 z-20 shadow-xl rounded-4xl opacity-90 scale-95 -rotate-6 transition-all hover:rotate-0 hover:z-40">
                            <img src={CreateEvent} className="w-[250px] md:w-[320px] rounded-4xl object-contain" alt="Events" />
                        </div>

                        {/* Right Piece (Secondary) */}
                        <div className="absolute right-[5%] md:right-[15%] top-12 z-20 shadow-xl rounded-4xl opacity-90 scale-95 rotate-6 transition-all hover:rotate-0 hover:z-40">
                            <img src={CreateProject} className="w-[250px] md:w-[320px] rounded-4xl object-contain" alt="Projects" />
                        </div>

                        {/* Background Floating Piece */}
                        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 opacity-40 blur-sm scale-110">
                            <img src={CreateTask} className="w-[400px] object-contain" alt="Tasks" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;