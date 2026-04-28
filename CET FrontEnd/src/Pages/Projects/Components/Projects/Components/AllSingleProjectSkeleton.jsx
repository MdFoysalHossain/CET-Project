import React from 'react';

const AllSingleProjectSkeleton = () => {

    const shimmer =
        "relative overflow-hidden bg-gray-200 " +
        "before:absolute before:inset-0 " +
        "before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] " +
        "before:animate-[shimmer_1.6s_infinite]";

    return (
        <div className="w-full text-left relative bg-white border border-[#e5e7eb] rounded-md p-5 shadow-sm">

            {/* keyframes (local, no config) */}
            <style>
                {`
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                `}
            </style>

            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <div className={`h-3 w-24 rounded ${shimmer}`}></div>
                    <div className={`h-5 w-40 rounded ${shimmer}`}></div>
                </div>

                <div className={`h-6 w-20 rounded-full ${shimmer}`}></div>
            </div>

            {/* Date */}
            <div className={`h-4 w-48 rounded mt-3 ${shimmer}`}></div>

            {/* Progress */}
            <div className="mt-4">
                <div className="flex justify-between mb-2">
                    <div className={`h-3 w-16 rounded ${shimmer}`}></div>
                    <div className={`h-3 w-16 rounded ${shimmer}`}></div>
                </div>

                <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200">
                    <div className={`h-full w-1/3 rounded-full ${shimmer}`}></div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-5 gap-20">

                {/* Team Avatars */}
                <div className="flex items-center w-[200px] ml-3">
                    <div className="flex -space-x-3">
                        <div className={`w-8 h-8 rounded-full border-2 border-white ${shimmer}`}></div>
                        <div className={`w-8 h-8 rounded-full border-2 border-white ${shimmer}`}></div>
                        <div className={`w-8 h-8 rounded-full border-2 border-white ${shimmer}`}></div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <div className={`h-6 w-16 rounded-lg ${shimmer}`}></div>
                    <div className={`h-6 w-16 rounded-lg ${shimmer}`}></div>
                </div>

            </div>
        </div>
    );
};

export default AllSingleProjectSkeleton;