import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../../../Context/AccountProvidor';
import { SettingsContext } from '../../../../../../Context/SettingsProvidor';
import { useParams } from 'react-router';

const CreateTask = ({ isOpen, onClose, setCreateTaskOpen,  }) => {
    const [search, setSearch] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);
    const { accountDetails } = useContext(AuthContext)
    const { backEndUrl } = useContext(SettingsContext)

    
    const { id: projectId } = useParams();

    

    const users = [
        { id: 1, name: "Foysal Hossain", role: "Admin", email: "foysal@example.com" },
        { id: 5, name: "Foysal Hossain", role: "Developer", email: "foysal2@example.com" },
        { id: 2, name: "John Doe", role: "Developer", email: "john@example.com" },
        { id: 3, name: "Jane Smith", role: "UI Designer", email: "jane@example.com" },
        { id: 4, name: "Alice Johnson", role: "Researcher", email: "alice@example.com" },
    ];

    const filteredUsers = users.filter((user) => {
        const searchText = search.toLowerCase();

        return (
            (user.name.toLowerCase().includes(searchText) ||
                user.email?.toLowerCase().includes(searchText)) &&
            !selectedUsers.some((u) => u.id === user.id)
        );
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dueDateValue = e.target.dueDate.value;
        const details = {
            projectId: projectId,
            taskName: e.target.taskName.value,
            descriptions: e.target.descriptions.value,
            status: e.target.status.value,
            createdAt: new Date().toISOString(),
            dueDate: dueDateValue
                ? (() => {
                    const localDate = new Date(dueDateValue);
                    localDate.setHours(23, 59, 59, 999);
                    return localDate.toISOString();
                })()
                : "",
            assignees: [...selectedUsers],
            createdBy: accountDetails.email,
            priority: e.target.priority.value,
            attachments: []
        };
        // console.log(details)

        const token = await accountDetails.getIdToken();

        try {
            const res = await fetch(
                backEndUrl + "/createTask?email=" + accountDetails.email,
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
            console.log("Submit Res:", data);
            setCreateTaskOpen(false);
            
        } catch (error) {
            console.log("Submit Res Error:", error);
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed absolute inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal Container */}
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 relative animate-fadeIn max-h-[700px] overflow-y-auto font-jukarta text-left">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Create Task
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Project Name */}
                    <div>
                        <label className="text-sm text-gray-500">Task Name</label>
                        <input
                            type="text"
                            placeholder="Enter task name"
                            name='taskName'
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  border border-transparent  outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">Description</label>
                        <textarea
                            rows={4}
                            placeholder="Write task description..."
                            name='descriptions'
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border border-transparent outline-none  focus:bg-white focus:border-blue-500 focus:shadow-sm transition"
                        />
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Priority */}
                        <div className='flex-1'>
                            <label className="text-sm text-gray-500">Status</label>
                            <select name='status' className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100   outline-none">
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Q&A">Q&A</option>
                                <option value="Finished">Finished</option>
                                {/* <option value="Halt">Halt</option> */}
                            </select>
                        </div>


                        <div className='flex-1'>
                            <label className="text-sm text-gray-500">Priority</label>
                            <select name='priority' className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100   outline-none">
                                <option value="low">🟢 Low</option>
                                <option value="medium">🟡 Medium</option>
                                <option value="high">🔴 High</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4">

                        <div className='flex-1'>
                            <label className="text-sm text-gray-500">Due Date</label>
                            <input
                                type="date"
                                name='dueDate'
                                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100  outline-none"
                            />
                        </div>

                    </div>

                    <div className="relative">
                        <label className="text-sm text-gray-500 mb-1 block">
                            Assign Members
                        </label>

                        {/* Input Container */}
                        <div className="mt-1 w-full rounded-xl bg-gray-100 px-3 py-2 flex flex-wrap gap-2 items-center border border-transparent  transition">

                            {/* Selected Users */}
                            {selectedUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex items-center gap-2 bg-blue-50 text-blue-700 px-2.5 pl-1 py-1 rounded-full text-sm border border-blue-100"
                                >
                                    {/* Avatar */}
                                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-medium text-blue-800">
                                        {user.name.charAt(0)}
                                    </div>

                                    {/* Name */}
                                    <span className="text-sm">{user.name}</span>

                                    {/* Remove */}
                                    <button
                                        onClick={() =>
                                            setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id))
                                        }
                                        className="ml-1 text-blue-400 hover:text-red-500 transition text-xs"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}

                            {/* Input */}
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search and add members..."
                                className="flex-1 bg-transparent outline-none text-sm min-w-[140px] placeholder:text-gray-400 p-1.5"
                            />
                        </div>

                        {/* Dropdown */}
                        {search && (
                            <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn">

                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <div
                                            key={user.id}
                                            onClick={() => {
                                                setSelectedUsers([...selectedUsers, user]);
                                                setSearch("");
                                            }}
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition"
                                        >
                                            {/* Avatar */}
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                                                {user.name.charAt(0)}
                                            </div>

                                            {/* Info */}
                                            <div className="flex flex-col text-left text-black">
                                                <p className="text-xs  mb-1">
                                                    <span>{user.name}</span> <span className='bg-gray-200 rounded-sm p-1'>{user.role}</span>
                                                </p>
                                                <span className="text-xs ">
                                                    {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-3 text-sm text-gray-400 text-center">
                                        No users found
                                    </div>
                                )}
                            </div>
                        )}
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
};

export default CreateTask;