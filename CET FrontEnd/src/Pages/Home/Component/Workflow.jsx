import React from 'react';
import { PlusCircle, UserPlus, BarChart3, Rocket, ActivityIcon } from 'lucide-react';

const Workflow = () => {
    const steps = [
        {
            title: "Create Project",
            desc: "Set up your workspace and define your goals in seconds.",
            icon: <PlusCircle size={28} />,
        },
        {
            title: "Assign Tasks",
            desc: "Distribute responsibilities and set clear deadlines for the team.",
            icon: <UserPlus size={28} />,
        },
        {
            title: "Track Progress",
            desc: "Watch work move through stages with real-time visual updates.",
            icon: <BarChart3 size={28} />,
        },
        {
            title: "Deliver Faster",
            desc: "Hit your milestones and ship high-quality results on time.",
            icon: <Rocket size={28} />,
        },
    ];

    return (
        <section className="max-w-[1330px] mx-auto py-24 px-4 font-jukarta">
            {/* Header */}
            <div className="text-center mb-20">
                <div className="inline-flex uppercase items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4 border border-indigo-100">
                    <ActivityIcon size={16} />
                    <span>The Process</span>
                </div>
                <h2 className='text-5xl font-extrabold text-slate-900 tracking-tight'>
                    How ProjectNext <span className="text-indigo-600">powers your day.</span>
                </h2>
            </div>

            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                
                {/* Visual Connector Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 -z-10"></div>

                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        
                        {/* Number & Icon Circle */}
                        <div className="relative mb-8">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-indigo-600 shadow-xl shadow-indigo-100 group-hover:border-indigo-100 transition-all duration-300 group-hover:-translate-y-2">
                                {step.icon}
                            </div>
                            
                            {/* Step Counter Badge */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center border-4 border-white">
                                {index + 1}
                            </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-500 leading-relaxed px-4">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Workflow;