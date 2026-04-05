import React, { useState } from "react";
import Select from "react-select";

export default function ProjectDashboardPage({ isOpen, onClose }) {

    
    const [project, setProject] = useState({
        name: '',
        createdAt: { date: '', hour: '00', minute: '00' },
        dueDate: { date: '', hour: '00', minute: '00' },
        tags: [],
        description: '',
        tasks: [],
        assignees: [],
    });
    
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal Container */}
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 relative animate-fadeIn">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Create Project
                </h2>

                {/* Form */}
                <form className="space-y-5">

                    {/* Project Name */}
                    <div>
                        <label className="text-sm text-gray-500">Project Name</label>
                        <input
                            type="text"
                            placeholder="Enter project name"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  border border-transparent  outline-none transition"
                        />
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Date */}
                        <div>
                            <label className="text-sm text-gray-500">Due Date</label>
                            <input
                                type="date"
                                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  outline-none"
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label className="text-sm text-gray-500">Time</label>
                            <div className="flex gap-2">
                                <select className="w-full px-3 py-3 rounded-lg bg-gray-100">
                                    {[...Array(24)].map((_, i) => (
                                        <option key={i}>{String(i).padStart(2, "0")}</option>
                                    ))}
                                </select>

                                <select className="w-full px-3 py-3 rounded-lg bg-gray-100">
                                    {[...Array(60)].map((_, i) => (
                                        <option key={i}>{String(i).padStart(2, "0")}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="text-sm text-gray-500">Priority</label>
                        <select className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100   outline-none">
                            <option value="low">🟢 Low</option>
                            <option value="medium">🟡 Medium</option>
                            <option value="high">🔴 High</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
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
}