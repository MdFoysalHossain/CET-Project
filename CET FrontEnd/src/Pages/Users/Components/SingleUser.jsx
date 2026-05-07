import React from 'react';
import Swal from 'sweetalert2';

const SingleUser = ({ users, setShowUpdateModal, setSelectedUser }) => {



    const deleteUser = (username) => {
        Swal.fire({
            html: `
        <div class="flex flex-col items-center text-center w-full">
            <h2 class="text-xl font-semibold text-gray-800 mt-5 font-rubik">
                Delete @${username} User? 
                <p class="text-red-500">NEEDS WORK!!</p>
            </h2>

            <p class="text-sm text-gray-600 font-jukarta mt-2 max-w-[280px]">
                This action cannot be undone. All user data will be removed, and user will be removed from the assigned task, subtask and project.
            </p>
        </div>
    `,

            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "Cancel",

            width: "400px",
            buttonsStyling: false,

            customClass: {
                popup: "rounded-2xl p-8",
                actions: "flex flex-col gap-3 mt-6 w-full px-6",

                confirmButton:
                    "w-[380px] cursor-pointer bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-sm text-sm font-medium",

                cancelButton:
                    "w-[380px] cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 py-2.5 rounded-sm text-sm font-medium"
            }
        }).then((result) => {

            // ✅ CONFIRM CLICK
            if (result.isConfirmed) {
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
                                User Deleted!
                            </h2>

                            <!-- Text -->
                            <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                User and all related data have been deleted successfully.
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
            }

            // ❌ CANCEL CLICK
            else if (result.dismiss === Swal.DismissReason.cancel) {
                console.log("User cancelled");
            }

        });
    }

    return (
        <>
            {users?.map((user, index) => (
                <tr key={index} className={`transition bg-gray-100`}>

                    {/* INDEX */}
                    <td className="bg-white  border-gray-200 py-4 ">
                        #{index + 1}
                    </td>

                    {/* USER */}
                    <td className="bg-white  border-gray-200">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                                {user.name.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs">{user.name}</span>
                                <span className=" text-md -mt-0">@{user.username}</span>
                            </div>
                        </div>
                    </td>

                    {/* STATUS */}
                    <td className="bg-white  border-gray-200">
                        <span
                            className={`badge text-xs capitalize ${user.status === "active"
                                ? "badge-success"
                                : "badge-ghost"
                                }`}
                        >
                            {user.status}
                        </span>
                    </td>

                    {/* PROJECT */}
                    <td className="bg-white  border-gray-200">
                        <span className="badge badge-outline">
                            {user.projectHas.length}
                        </span>
                    </td>

                    {/* TASK */}
                    <td className="bg-white  border-gray-200">
                        <span className="badge badge-outline">
                            {user.taskHas.length}
                        </span>
                    </td>

                    <td className="bg-white border-gray-200">
                        <span className="px-4 border border-gray-200 w-full py-1.75 text-sm bg-gray-100 rounded-lg inline-block">
                            {user.role || "Not assigned"}
                        </span>
                    </td>

                    {/* ACTION */}
                    <td className="bg-white border-gray-200 ">
                        <button
                            className="bg-indigo-500 mr-5 text-white  cursor-pointer font-medium px-4 py-1.5 rounded-md hover:bg-indigo-600 transition"
                            onClick={() => {
                                setShowUpdateModal(true)
                                setSelectedUser(user);
                            }}
                        >
                            Update
                        </button>
                        <button
                            className="bg-rose-500 text-white cursor-pointer font-medium px-4 py-1.5 rounded-md hover:bg-rose-600 transition"
                            onClick={() => {
                                deleteUser(user.username)
                            }}
                        >
                            Remove
                        </button>
                    </td>

                </tr>
            ))}
        </>
    );
};

export default SingleUser;