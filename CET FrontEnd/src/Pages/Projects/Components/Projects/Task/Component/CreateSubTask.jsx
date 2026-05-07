import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../../../Context/AccountProvidor';
import { SettingsContext } from '../../../../../../Context/SettingsProvidor';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';

const CreateSubTask = ({ createSubTaskOpen, setCreateSubTaskOpen, selectedTask, allSubTask, setAllSubTask }) => {
    const {id: projectID} = useParams()
    const { accountDetails } = useContext(AuthContext)
    const { backEndUrl } = useContext(SettingsContext)
    
    // console.log("This is Parems:", selectedTask)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const details = {
            projectId: projectID,
            taskId: selectedTask._id,
            subTaskName: e.target.subTaskName.value,
            description: e.target.description.value,
            state: "normal",
            createdAt: new Date().toISOString(),
            createdBy: accountDetails.email,
            attachments: []
        };

        const token = await accountDetails.getIdToken();

        try {
            const res = await fetch(
                backEndUrl + "/createSubTask?email=" + accountDetails.email,
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

            setAllSubTask(prev => [...prev, dataMended]);

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


    // console.log("Create Sub Task Rendered", createSubTaskOpen);
    if (!createSubTaskOpen) return null;

    return (
        <div className="fixed absolute inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal Container */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative animate-fadeIn max-h-[700px] overflow-y-auto font-jukarta text-left">

                {/* Close Button */}
                <button
                    onClick={() => setCreateSubTaskOpen(false)}
                    className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Create Sub Task
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Project Name */}
                    <div>
                        <label className="text-sm text-gray-500">Task Name</label>
                        <input
                            type="text"
                            name='subTaskName'
                            placeholder="Enter task name"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  border border-transparent  outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">Description</label>
                        <textarea
                            rows={4}
                            name='description'
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