import React, { useState } from 'react';

const CreateSubTask = ({ createSubTaskOpen, setCreateSubTaskOpen }) => {

    console.log("Create Sub Task Rendered", createSubTaskOpen);
    if (!createSubTaskOpen) return null;

    return (
        <div className="fixed absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal Container */}
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 relative animate-fadeIn max-h-[700px] overflow-y-auto font-rubik text-left">

                {/* Close Button */}
                <button
                    onClick={() => setCreateSubTaskOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Create Sub Task
                </h2>

                {/* Form */}
                <form className="space-y-5">

                    {/* Project Name */}
                    <div>
                        <label className="text-sm text-gray-500">Task Name</label>
                        <input
                            type="text"
                            placeholder="Enter task name"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  border border-transparent  outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">Description</label>
                        <textarea
                            rows={4}
                            placeholder="Write task description..."
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border border-transparent outline-none  focus:bg-white focus:border-blue-500 focus:shadow-sm transition"
                        />
                    </div>


                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setCreateSubTaskOpen(false)}
                            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                        >
                            Create
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateSubTask;