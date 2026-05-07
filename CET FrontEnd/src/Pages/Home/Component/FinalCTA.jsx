import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router';

const FinalCTA = () => {
    return (
        <section className="bg-white px-4 font-jukarta mb-20">
            {/* The Gradient Container */}
            <div className="max-w-[1330px] mx-auto bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-[32px] p-20 md:p-24 shadow-2xl shadow-indigo-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
                    
                    {/* Left Side: Copy */}
                    <div className="lg:col-span-8 text-left">
                        <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-indigo-50/10 text-indigo-100 text-sm font-bold border border-indigo-100/10 mb-6">
                            <Zap size={16} fill="currentColor" />
                            <span>FINAL STEP TO CLARITY</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
                            Start Managing Projects Smarter Today
                        </h2>
                        
                        <p className="text-xl leading-relaxed text-indigo-100 mt-6 max-w-2xl font-medium">
                            Join teams using TrackLio to simplify collaboration and deliver faster. Hit your deadlines, remove friction, and build momentum.
                        </p>
                    </div>

                    {/* Right Side: Large Button */}
                    <div className="lg:col-span-4 flex justify-start lg:justify-end">
                        <Link to={"/Login"} className="group text-lg font-bold px-12 py-6 bg-white text-indigo-600 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-indigo-50 hover:shadow-2xl hover:shadow-indigo-900/30">
                            Get Started Free
                            <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;