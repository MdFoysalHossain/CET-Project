

import React from "react";
import { X, Clock, Star, MoreVertical, Calendar, Tag, Users, Info, CirclePlus, SquarePen } from "lucide-react";

const OrgProjectDetails = ({ showDetails, setShowDetails }) => {
    return (
        // <div className={`flex items-center justify-end pr-5 font-sans w-screen h-screen bg-black/50 font-rubik absolute top-0 right-0 ${showDetails || "hidden"}`}
        // >

        //     {/* CARD */}
        //     <div className="w-[500px] bg-white rounded-2xl shadow-xl border border-gray-200">

        //         {/* HEADER */}
        //         <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
        //             <button className="text-gray-500 hover:text-black" onClick={() => setShowDetails(!showDetails)}>
        //                 <X size={18} />
        //             </button>

        //             {/* <div className="flex gap-3 text-gray-500">
        //                 <Clock size={18}/>
        //                 <Star size={18}/>
        //                 <MoreVertical size={18}/>
        //             </div> */}
        //         </div>

        //         {/* BODY */}
        //         <div className="p-6 space-y-5">

        //             {/* TITLE */}
        //             <h2 className="text-lg font-semibold">
        //                 Design Homepage Wireframe
        //             </h2>

        //             {/* META INFO */}
        //             <div className="space-y-3 text-sm text-gray-600">

        //                 {/* Created */}
        //                 <div className="flex justify-between">
        //                     <span className="flex items-center gap-2">
        //                         <Clock size={14} /> Created time
        //                     </span>
        //                     <span>September 20, 2024 &nbsp; 10:35 AM</span>
        //                 </div>

        //                 {/* Status */}
        //                 <div className="flex justify-between">
        //                     <span>Status</span>
        //                     <span className="px-2 py-1 text-xs rounded bg-orange-100 text-orange-600">
        //                         ● In Research
        //                     </span>
        //                 </div>

        //                 {/* Priority */}
        //                 <div className="flex justify-between">
        //                     <span>Priority</span>
        //                     <span className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-600">
        //                         Low
        //                     </span>
        //                 </div>

        //                 {/* Due date */}
        //                 <div className="flex justify-between">
        //                     <span className="flex items-center gap-2">
        //                         <Calendar size={14} /> Due Date
        //                     </span>
        //                     <span>Oct 3 - Oct 12</span>
        //                 </div>

        //                 {/* Tags */}
        //                 <div className="flex justify-between">
        //                     <span className="flex items-center gap-2">
        //                         <Tag size={14} /> Tags
        //                     </span>
        //                     <div className="flex gap-2">
        //                         <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Task</span>
        //                         <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Wireframe</span>
        //                         <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Homepage</span>
        //                     </div>
        //                 </div>

        //                 {/* Assignees */}
        //                 <div className="flex justify-between items-center">
        //                     <span className="flex items-center gap-2">
        //                         <Users size={14} /> Assignees
        //                     </span>

        //                     <div className="flex -space-x-2">
        //                         <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=1" />
        //                         <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=2" />
        //                         <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=3" />
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* DESCRIPTION */}
        //             <div className="bg-gray-100 p-4 rounded-lg text-sm text-left text-gray-600">
        //                 <p className="font-medium mb-1 text-gray-700 font-semibold">
        //                     Project Description
        //                 </p>
        //                 <p>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                     Nunc vulputate libero et velit interdum, ac aliquet odio
        //                     mattis. Class aptent taciti sociosqu ad litora torquent
        //                     per conubia nostra.
        //                 </p>
        //             </div>

        //         </div>

        //         {/* TABS */}
        //         <div className="border-t border-[#e5e7eb] px-6 pt-3">
        //             <div className="flex gap-6 text-sm text-gray-500">
        //                 <button className="border-b-2 border-indigo-500 pb-2 text-indigo-600">
        //                     Activity
        //                 </button>
        //                 <button>My Work</button>
        //                 <button>Assigned</button>
        //                 <button>Comments</button>
        //             </div>
        //         </div>

        //         {/* ACTIVITY */}
        //         <div className="px-6 py-4 space-y-5 text-sm">

        //             <p className="font-semibold text-gray-600">Today</p>

        //             {/* Activity item */}
        //             <div className="flex gap-3 text-left">
        //                 <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=4" />
        //                 <p className="text-gray-700">
        //                     <span className="font-medium">Talan Korsgaard</span> changed the status
        //                     of “Design Homepage Wireframe” from To Do to In Progress
        //                     <span className="block text-xs text-gray-400">10:45 AM</span>
        //                 </p>
        //             </div>

        //             <div className="flex gap-3 text-left">
        //                 <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=5" />
        //                 <p>
        //                     <span className="font-medium">Hanna Philips</span> added reaction 🎉
        //                     <span className="block text-xs text-gray-400">10:45 AM</span>
        //                 </p>
        //             </div>

        //             <div className="flex gap-3 text-left">
        //                 <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=6" />
        //                 <p>
        //                     <span className="font-medium">Davis Donin</span> uploaded file
        //                     <span className="block text-xs text-gray-400">10:45 AM</span>
        //                 </p>
        //             </div>

        //             <p className="font-semibold text-gray-600 pt-3">Yesterday</p>

        //             <div className="flex gap-3 text-left">
        //                 <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=7" />
        //                 <p>
        //                     <span className="font-medium">Talan Korsgaard</span> added reaction 👍
        //                     <span className="block text-xs text-gray-400">10:45 AM</span>
        //                 </p>
        //             </div>

        //         </div>
        //     </div>
        // </div>














        <div className={`flex items-center justify-end pr-5 font-sans w-screen h-screen bg-black/50 font-rubik absolute top-0 right-0 ${showDetails || "hidden"}`}
        >

            {/* CARD */}
            <div className="w-[500px] bg-white rounded-2xl shadow-xl border border-gray-200 max-h-[800px] overflow-y-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
                    <button className="text-gray-500 hover:text-black" onClick={() => setShowDetails(!showDetails)}>
                        <X size={18} />
                    </button>

                    <div className="flex gap-3 text-gray-500">
                        <SquarePen size={18}/>
                     </div>
                </div>

                {/* BODY */}
                <div className="p-6 space-y-5">

                    {/* TITLE */}
                    <h2 className="text-lg font-semibold text-left">
                        Design Homepage Wireframe
                    </h2>

                    {/* META INFO */}
                    <div className="space-y-3 text-sm text-gray-600">

                        {/* Created */}
                        <div className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <Clock size={14} /> Created time
                            </span>
                            <span>September 20, 2024 &nbsp; 10:35 AM</span>
                        </div>

                        {/* Status */}
                        <div className="flex justify-between">
                            <span>Status</span>
                            <span className="px-2 py-1 text-xs rounded bg-orange-100 text-orange-600">
                                ● In Research
                            </span>
                        </div>

                        {/* Priority */}
                        <div className="flex justify-between">
                            <span>Priority</span>
                            <span className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-600">
                                Low
                            </span>
                        </div>

                        {/* Due date */}
                        <div className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} /> Due Date
                            </span>
                            <span>Oct 12, 2026</span>
                        </div>

                        {/* Assignees */}
                        <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                                <Users size={14} /> Assigned To
                            </span>

                            <div className="flex -space-x-2">
                                <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=1" />
                                <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=2" />
                                <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=3" />
                            </div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}



                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-left text-gray-600">
                        <p className="mb-2 text-gray-700 font-semibold">
                            Project Description
                        </p>

                        {/* <pre className="whitespace-pre-wrap break-words leading-relaxed font-sans">
                            {`- Create a modern, clean, and responsive homepage layout
- Design a strong hero section with headline, subtext, and call-to-action
- Include sections for features, services, and key highlights
- Add a testimonials or social proof section
- Ensure clear and intuitive navigation
- Maintain consistent spacing, colors, and typography
- Optimize for mobile, tablet, and desktop screens
- Focus on user experience and fast loading performance
- Include a well-structured footer with essential links and info`}
                        </pre> */}

                        <pre className="whitespace-pre-wrap break-words leading-relaxed font-rubik">
                            Design a modern, responsive homepage that clearly communicates the brand’s identity and value. The layout should include a clean hero section with a strong headline and call-to-action, followed by sections for features, services, testimonials, and a footer. Focus on intuitive navigation, visually appealing UI, and consistent spacing, colors, and typography. Ensure the design is mobile-friendly and optimized for performance and user experience.
                        </pre>
                    </div>

                </div>

                {/* TABS */}
                <div className="border-t border-[#e5e7eb] px-6 pt-3 flex justify-between items-center">
                    <div className="flex gap-6 text-sm text-gray-500">
                        <button className="border-b-2 border-indigo-500 pb-1 text-indigo-600 text-sm">
                            Sub Tasks
                        </button>
                    </div>
                    <button className=" pb-2 text-indigo-600 flex items-center gap-1 cursor-pointer">
                        <CirclePlus size={16} />
                        <p className="text-sm">Create a Sub Task</p>
                    </button>
                </div>

                {/* ACTIVITY */}
                <div className="px-6 py-4 space-y-5 text-sm">

                    <div className="">

                        <ul class="list rounded-box text-left flex flex-col gap-2 *:cursor-pointer">

                            <li class="w-full bg-gray-100 rounded-lg">
                                <div className="collapse-title font-semibold">#1 Account Page</div>
                            </li>
                            <li class="w-full bg-gray-100 rounded-lg">
                                <div className="collapse-title font-semibold">#2 Login Page</div>
                            </li>
                            <li class="w-full bg-gray-100 rounded-lg">
                                <div className="collapse-title font-semibold">#3 Registration Page</div>
                            </li>
                        </ul>

                    </div>




                </div>


                <div className="border-t border-[#e5e7eb] px-6 pt-3">
                    <div className="flex gap-6 text-sm text-gray-500">
                        <button className="border-b-2 border-indigo-500 pb-1 text-sm text-indigo-600">
                            Comments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgProjectDetails;