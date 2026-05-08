import React, { useContext } from 'react';
import { Link } from 'react-router';
import { BookOpen, SquarePen, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../../../Context/AccountProvidor';
import { SettingsContext } from '../../../../../Context/SettingsProvidor';
import AllSingleProjectSkeleton from './AllSingleProjectSkeleton';

const AllSingleProject = ({ project, index, setAllProjects, allProjects }) => {

    const { backEndUrl } = useContext(SettingsContext)
    const { accountDetails } = useContext(AuthContext)

    const fireDelete = (projectName) => {
        Swal.fire({
            html: `
    <div class="flex flex-col items-center text-center w-full">
        <h2 class="text-xl font-semibold text-gray-800 mt-5 font-rubik">
            Delete ${projectName} Project?
        </h2>

        <p class="text-sm text-gray-600 font-jukarta mt-2 max-w-[280px]">
            This action cannot be undone. All Subtask, Comments, Attachments will be deleted permanently!
        </p>

        <p class="text-xs text-gray-600 mt-3">
            Type <b class="text-black">I Understand</b> to confirm
        </p>
    </div>
    `,

            input: "text",
            inputPlaceholder: "I Understand",

            showCancelButton: true,
            confirmButtonText: "Yes I Acknowledge, Delete",
            cancelButtonText: "Cancel",

            width: "400px",
            buttonsStyling: false,

            customClass: {
                popup: "rounded-2xl p-8",
                actions: "flex flex-col gap-3 mt-6 w-full px-6",

                confirmButton:
                    "w-[380px] cursor-pointer bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-sm text-sm font-medium",

                cancelButton:
                    "w-[380px] cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 py-2.5 rounded-sm text-sm font-medium",

                input:
                    "!w-[380px] !ml-2.5 mx-auto !-mb-2 outline-none border bg-white border-gray-300 rounded-lg text-sm focus:outline-none active:bg-white focus:bg-white  focus:ring-2 focus:ring-red-400"
            },

            preConfirm: (value) => {
                if (value !== "I Understand") {
                    Swal.showValidationMessage("You must type 'I Understand'");
                    return false;
                }
                return true;
            }
        }).then((result) => {

            // ✅ CONFIRM CLICK
            if (result.isConfirmed) {

                const deleteTheProject = async () => {
                    const token = await accountDetails.getIdToken();

                    fetch(`${backEndUrl}/deleteProject?email=${accountDetails.email}&projectId=${project._id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    })
                        .then(res => res.json())
                        .then(res => {
                            const newProjects = allProjects.filter(thisProject => thisProject._id !== project._id)
                            setAllProjects(newProjects)
                        })
                        .catch(error => {
                            Swal.fire({
                                html: `
                                    <div class="flex flex-col items-center text-center w-full">

                                        <!-- Error Icon -->
                                        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                class="w-6 h-6 text-red-500" 
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </div>

                                        <!-- Title -->
                                        <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                                            Could Not Delete
                                        </h2>

                                        <!-- Text -->
                                        <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                            Something went wrong while deleting the project. Please try again.
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
                            // console.log("Delete Error:", error)
                        });
                }





                deleteTheProject();

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
                                Project Deleted!
                            </h2>

                            <!-- Text -->
                            <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                Project and all related data have been deleted successfully.
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
                // console.log("User cancelled");

                // optional: do something on cancel
                // example:
                // toast("Deletion cancelled");
            }

        });
    }

    return (
        <Link key={index} to={`/Dashboard/Projects/${project._id}`}

            // onClick={() => setShowDetails(true)}
            className="w-full text-left relative bg-white border border-[#e5e7eb] rounded-md p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
            {/* Header */}
            <div className="flex justify-between items-start">

                {/* Title Section */}
                <div>
                    <p className="text-xs text-gray-400 font-semibold font-jukarta">#{project?._id}</p>
                    <h3 className="text-lg font-medium text-gray-800 font-rubik group-hover:text-main-color transition-colors duration-300">
                        {project?.name}
                    </h3>
                </div>

                {/* Priority Badge */}
                <div className={`flex items-center border  bg-amber-50 rounded-full px-3 py-1 text-xs font-semibold ${project?.priority === "High" ? "bg-red-400/20 border-red-400 text-red-400" : project?.priority === "Medium" ? "bg-amber-400/20 border-amber-400 text-amber-400" : "bg-indigo-400/20 border-indigo-400 text-indigo-400"}`}>
                    <div className={`w-2 h-2 bg-amber-400 rounded-full mr-2 ${project?.priority === "High" ? "bg-red-400" : project?.priority === "Medium" ? "bg-amber-400" : "bg-indigo-400"}`}></div>
                    <span className='font-jukarta'>{project?.priority}</span>
                </div>

            </div>

            {/* Date */}
            <p className="text-sm text-gray-500 mt-2 font-jukarta ">
                Due: {new Date(project?.dueDate).toLocaleString()}
            </p>

            {/* Progress Section */}
            <div className="mt-4 font-jukarta">

                <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                    <p>Progress</p>
                    <p>{project?.tasks.length} Tasks</p>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                        style={{ width: `${0 / project?.tasks.length * 100}%` }}
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    ></div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-5 gap-20">

                {/* Team */}
                <div className="flex items-center  w-[200px]">

                    <div className="flex items-center ml-3">
                        {
                            project.assignees.slice(0, 2).map((User, ind) => (
                                <div
                                    key={ind}
                                    className={`relative group w-8 h-8 rounded-full border-2 border-white flex justify-center items-center  font-jukarta
                                                                    ${ind % 2 === 0 ? "bg-indigo-200 -ml-3" : "bg-indigo-400 -ml-3"}`}
                                >
                                    <p className="font-jukarta capitalize">{User[0]}</p>

                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
                                                            opacity-0 group-hover:opacity-100 transition-all duration-200 
                                                            bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                                        {User}
                                    </div>
                                </div>
                            ))
                        }

                        <div className="-ml-3">
                            {
                                project.assignees.length > 2 && (
                                    <p className="text-sm w-[70px] -mr-10 flex justify-center items-center text-gray-500 ml-2 font-jukarta">
                                        +{project.assignees.length - 2} more
                                    </p>
                                )
                            }
                        </div>
                    </div>

                    {/* <p className="text-sm text-gray-500 ml-2 font-jukarta">+2 more</p> */}

                </div>

                {/* Actions */}
                <div className="flex gap-2 font-jukarta">

                    {/* <button className="flex items-center gap-1 text-xs border border-gray-200 px-2 py-1 rounded-lg hover:bg-gray-100">
                                    <BookOpen size={14} /> View
                                </button> */}

                    <button className="flex items-center gap-1 text-xs border border-gray-200 px-2 py-1 rounded-lg hover:bg-gray-100">
                        <SquarePen size={14} /> Update
                    </button>

                    <button
                        onClick={(e) => {
                            e.preventDefault();   // stops Link navigation
                            e.stopPropagation();  // stops bubbling
                            fireDelete(project?.name);
                        }}
                        className="flex cursor-pointer items-center gap-1 text-xs border border-red-200 text-red-500 px-2 py-1 rounded-lg hover:bg-red-50"
                    >
                        <Trash2 size={14} /> Delete
                    </button>
                </div>

            </div>

        </Link>
    );
};

export default AllSingleProject;