import React, { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../../../../Context/AccountProvidor";
import { SettingsContext } from "../../../../Context/SettingsProvidor";

export default function ProjectDashboardPage({ isOpen, onClose }) {
    const { accountDetails } = useContext(AuthContext)
    const { backEndUrl } = useContext(SettingsContext)



    const [project, setProject] = useState({
        name: '',
        createdAt: "",
        dueDate: "",
        tasks: [],
        assignees: [],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dueDateValue = e.target.dueDate.value;

        const details = {
            name: e.target.projectName.value,
            createdAt: new Date().toISOString(),
            dueDate: dueDateValue
                ? new Date(dueDateValue + "T00:00:00Z").toISOString()
                : "",
            tasks: [],
            assignees: [accountDetails.email],
            createdBy: accountDetails.email,
            priority: e.target.priority.value
        };

        const token = await accountDetails.getIdToken();

        try {
            const res = await fetch(backEndUrl + "/createProject?email=" + accountDetails.email, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(details)
            })
            const data = await res.json();

            console.log("Submit Res:", data);

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
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
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