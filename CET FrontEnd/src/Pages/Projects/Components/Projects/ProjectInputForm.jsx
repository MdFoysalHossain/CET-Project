import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";
import { AuthContext } from "../../../../Context/AccountProvidor";
import { SettingsContext } from "../../../../Context/SettingsProvidor";
import Swal from "sweetalert2";

export default function ProjectDashboardPage({ isOpen, onClose, setOpen, setCreatedProject, allProjects, setAllProjects }) {
    const { accountDetails } = useContext(AuthContext)
    const { backEndUrl } = useContext(SettingsContext)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dueDateValue = e.target.dueDate.value;
        const details = {
            name: e.target.projectName.value,
            state: "normal",
            createdAt: new Date().toISOString(),
            dueDate: dueDateValue
                ? (() => {
                    const localDate = new Date(dueDateValue);
                    localDate.setHours(23, 59, 59, 999);
                    return localDate.toISOString();
                })()
                : "",
            tasks: [],
            assignees: [accountDetails.email],
            createdBy: accountDetails.email,
            priority: e.target.priority.value
        };

        const token = await accountDetails.getIdToken();

        try {
            const res = await fetch(
                backEndUrl + "/createProject?email=" + accountDetails.email,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(details)
                }
            );

            const data = await res.json();
            const dataMended = {
                ...details,
                _id: data.insertedId
            }

            setAllProjects(prev => [...prev, dataMended]);
            console.log([...allProjects, dataMended])
            setOpen(false);
            Swal.fire({
                html: `
                                    <div class="flex flex-col items-center text-center w-full">
            
                                        <!-- Success Icon -->
                                        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-500/10 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                class="w-6 h-6 text-emerald-500" 
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
            
                                        <!-- Title -->
                                        <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                                            Project Created!
                                        </h2>
            
                                        <!-- Text -->
                                        <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                            Project created successfully.
                                        </p>
            
                                    </div>
                                `,

                width: "400px",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,

                customClass: {
                    popup: "rounded-2xl p-8"
                }
            });

        } catch (error) {
            console.log("Submit Res Error:", error);
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal Container */}
            <div className="w-full max-w-[400px] text-left bg-white rounded-2xl shadow-2xl p-8 relative animate-fadeIn">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl cursor-pointer"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Create Project
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Project Name */}
                    <div>
                        <label className="text-sm text-gray-500">Project Name</label>
                        <input
                            type="text"
                            name="projectName"
                            placeholder="Enter project name"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  border border-transparent  outline-none transition"
                        />
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                        {/* Date */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Due Date</label>
                            <input
                                type="date"
                                name="dueDate"
                                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  outline-none"
                            />
                        </div>
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="text-sm text-gray-500">Priority</label>
                        <select name="priority" className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100   outline-none">
                            <option value="Low">🟢 Low</option>
                            <option value="Medium">🟡 Medium</option>
                            <option value="High">🔴 High</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-3 pt-4 font-jukarta">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 hover:scale-105 rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 hover:scale-105 rounded-sm cursor-pointer bg-indigo-500 text-white hover:bg-indigo-500 transition shadow-md"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}