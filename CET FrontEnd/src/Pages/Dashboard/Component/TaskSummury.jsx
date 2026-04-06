import React from 'react';

const TaskSummury = () => {

    const tasks = [
        {
            id: 1,
            title: "Creating Mobile UI for bKash App",
            project: "Creating Mobile UI for bKash App",
            status: "To Do",
            deadline: "6/12/2026",
            assignedTo: ["Foysal Hossain", "Easeen Hasan", "Farhana Akter"],
        },
        {
            id: 2,
            title: "Dashboard API Integration",
            project: "Rocket App Backend API Integration",
            status: "In Progress",
            deadline: "8/12/2026",
            assignedTo: ["John Doe"],
        },
    ];

    return (
        <div className='bg-white border flex-1 border-gray-200 rounded-sm p-5 my-5'>
            <div className="text-left">
                <h2 className='text-lg font-jukarta font-semibold'>Task Summary</h2>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm font-jukarta mt-5">

                    {/* Header */}
                    <thead className="text-left">
                        <tr>
                            <th className="p-3 border border-gray-200">No</th>
                            <th className="p-3 border border-gray-200 text-left">Project Name</th>
                            <th className="p-3 border border-gray-200 text-left">Task Name</th>
                            <th className="p-3 border border-gray-200 text-left">Status</th>
                            <th className="p-3 border border-gray-200 text-left">Deadline</th>
                            <th className="p-3 border border-gray-200 text-left">Assigned To</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id} className="hover:bg-gray-50 text-left">

                                <td className="p-3 border border-gray-200">#{task.id}</td>

                                <td className="p-3 border border-gray-200">{task.project}</td>
                                <td className="p-3 border border-gray-200">{task.title}</td>

                                <td className="p-3 border border-gray-200">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${task.status === "To Do"
                                                ? "bg-gray-200 text-gray-700"
                                                : task.status === "In Progress"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {task.status}
                                    </span>
                                </td>

                                <td className="p-3 border border-gray-200">{task.deadline}</td>

                                <td className="p-3 border border-gray-200">
                                    {task.assignedTo.join(", ")}
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default TaskSummury;