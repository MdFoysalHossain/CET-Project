import React, { useContext, useEffect, useState } from 'react';
import { X, Clock, Star, MoreVertical, Calendar, Tag, Users, Info, CirclePlus, SquarePen, Image, File, Trash2, Link2 } from "lucide-react";
import { SettingsContext } from '../../../../../Context/SettingsProvidor';
import { AuthContext } from '../../../../../Context/AccountProvidor';
import { p } from 'framer-motion/client';

const MainTasks = ({ attachments, attachUpdated, showDetails, setShowDetails, setShowSubDetails, setCreateSubTaskOpen, selectedTask, setSelectedSubTask, setAllSubTask, allSubTask, setShowAttachment }) => {
    const { backEndUrl } = useContext(SettingsContext)
    const { accountDetails } = useContext(AuthContext)

    const [attachmentsDetails, setAttachmentsDetails] = useState()


    useEffect(() => {
        const fetechSubTasks = async () => {
            const token = await accountDetails.getIdToken();
            const isUpdated = attachUpdated;
            fetch(`${backEndUrl}/getSubTasks?email=${accountDetails.email}&taskId=${selectedTask?._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res)
                    // setTodoTask([...res])
                    setAllSubTask(res)
                    // console.log(res)
                    // console.log(isUpdated)
                })
                .catch(error => console.log("Can not get projects:", error))
        }

        fetechSubTasks()
    }, [selectedTask, setAllSubTask, accountDetails, backEndUrl, attachUpdated])


    useEffect(() => {
        const fetAttachment = () => {
            const hasAttachment = selectedTask && selectedTask?.attachments;
            // console.log("Has Attachments:", hasAttachment)
            const newAttachments = hasAttachment && [...attachments, ...hasAttachment]
            setAttachmentsDetails(newAttachments)

            // console.log("Attachments Details:", attachmentsDetails)
        }

        fetAttachment()
    }, [attachments, selectedTask])


    return (

        <div
            className={`flex items-center justify-end pr-5 font-sans w-screen h-screen bg-black/50 font-jukarta absolute top-0 right-0 z-100
                transition-all duration-300 overflow-hidden
                ${showDetails ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
        >

            {/* CARD */}
            <div
                className={`w-[600px] relative bg-white rounded-2xl shadow-xl border border-gray-200 max-h-[800px] overflow-y-auto font-jukarta
                    transform transition-all duration-300 ease-in-out
                    ${showDetails ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                    bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col
                `}
            >

                {/* HEADER */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
                    <button className="text-gray-500 hover:text-black cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
                        <X size={18} className='hover:scale-110 transition duration-200' />
                    </button>

                    <div className="flex gap-5">
                        <div className="flex gap-3 text-gray-500 cursor-pointer">
                            <SquarePen size={18} className='hover:scale-110 hover:text-indigo-500 transition duration-200' />
                        </div>
                        <div className="flex gap-3 text-gray-500 cursor-pointer">
                            <Trash2 size={18} className='hover:scale-110 hover:text-red-500 transition duration-200' />
                        </div>
                    </div>
                </div>

                {/* BODY */}
                <div className="p-6 space-y-5 overflow-y-auto flex-1">

                    {/* TITLE */}
                    <p className="text-xs text-left text-gray-400  mb-0">
                        #{selectedTask ? selectedTask._id : "Task Id"}
                    </p>

                    <h2 className="text-lg font-semibold text-left">
                        {selectedTask ? selectedTask.taskName : "Task Title"}
                    </h2>



                    {/* META INFO */}
                    <div className="space-y-3 text-sm text-gray-600">

                        {/* Created */}
                        <div className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <Clock size={14} /> Created time
                            </span>
                            <span className='capitalize'>
                                {selectedTask
                                    ? new Date(selectedTask.createdAt).toLocaleString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true
                                    }).replace(',', ' -')
                                    : "Created Date"}
                            </span>
                        </div>

                        {/* Status */}
                        <div className="flex justify-between">
                            <span>Status</span>
                            <span className="px-2 py-1 text-xs rounded bg-orange-100 text-orange-600">
                                {selectedTask ? selectedTask.status : "Statsus"}
                            </span>
                        </div>

                        {/* Priority */}
                        <div className="flex justify-between">
                            <span>Priority</span>
                            <span className={`px-2 py-1 text-xs rounded capitalize  ${selectedTask?.priority === "High" ? "bg-red-200  text-red-600" : selectedTask?.priority === "Medium" ? "bg-yellow-200  text-yellow-600" : "bg-indigo-100 text-indigo-600 "}`}>
                                {selectedTask ? selectedTask.priority : "Priority"}
                            </span>
                        </div>

                        {/* Due date */}
                        <div className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} /> Due Date
                            </span>
                            <span className='capitalize'>

                                {selectedTask
                                    ? new Date(selectedTask.dueDate).toLocaleString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true
                                    }).replace(',', ' -')
                                    : "Created Date"}
                            </span>
                        </div>

                        {/* Assignees */}
                        <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                                <Users size={14} /> Assigned To
                            </span>

                            <div className="flex -space-x-2">
                                <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=1" />
                                <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=2" />
                                <img className="w-7 h-7 rounded-full border" src="https://i.pravatar.cc/30?img=3" />
                            </div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="bg-gray-100 p-4 rounded-lg text-sm text-left text-gray-600">
                        <p className="mb-2 text-gray-700 font-semibold">
                            Project Description
                        </p>
                        <pre className="whitespace-pre-wrap break-words leading-relaxed font-jukarta">
                            {selectedTask ? selectedTask.descriptions : "Description"}
                        </pre>
                    </div>



                    {/* ATTACHMENTS */}
                    <div className="-mx-6">
                        <div className="border-t border-[#e5e7eb] px-6 pt-3 flex justify-between items-center">
                            <div className="flex gap-6 text-sm text-gray-500">
                                <button className="border-b-2 border-indigo-500 pb-1 text-indigo-600 text-sm">
                                    Attachments
                                </button>
                            </div>
                            <button onClick={() => setShowAttachment(true)} className=" pb-2 text-indigo-600 flex items-center gap-1 cursor-pointer">
                                <CirclePlus size={16} />
                                <p className="text-sm">Add Attachment</p>
                            </button>
                        </div>

                        <div className="px-6 py-4 space-y-5 text-sm">

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {
                                    attachmentsDetails?.length > 0 ? (
                                        attachmentsDetails.map((attach, index) => (
                                            <div
                                                key={index}
                                                onClick={() => window.open(attach.link, "_blank")}
                                                className="flex items-center bg-indigo-100 hover:bg-indigo-200 px-3 py-2 rounded-lg text-indigo-800 text-sm w-full gap-2 cursor-pointer transition"
                                            >
                                                <span>
                                                    {attach.type === "image" ? <Image size={16} /> : <Link2 size={16} />}
                                                </span>

                                                <p className="truncate w-full">
                                                    {attach.name}
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="col-span-full text-center p-6 text-sm  text-gray-600">
                                            No attachments yet
                                        </p>
                                    )
                                }
                            </div>

                        </div>

                    </div>





                    {/* SUB TASK */}
                    <div className="-mx-6">
                        <div className="border-t border-[#e5e7eb] px-6 pt-3 flex justify-between items-center">
                            <div className="flex gap-6 text-sm text-gray-500">
                                <button className="border-b-2 border-indigo-500 pb-1 text-indigo-600 text-sm">
                                    Sub Tasks
                                </button>
                            </div>
                            <button className=" pb-2 text-indigo-600 flex items-center gap-1 cursor-pointer" onClick={() => {
                                // console.log("Create Sub Task Clicked");
                                setCreateSubTaskOpen(true);
                            }}>
                                <CirclePlus size={16} />
                                <p className="text-sm">Create a Sub Task</p>
                            </button>
                        </div>



                        <div className="px-6 py-4 space-y-5 text-sm">

                            <div className="">

                                <ul className="list rounded-box text-left flex flex-col gap-2 *:cursor-pointer">
                                    {
                                        allSubTask && allSubTask?.length > 0 ?
                                            allSubTask.map((subTask, index) => (
                                                <li key={index} className="w-full bg-gray-100 rounded-lg">
                                                    <div className="collapse-title font-semibold" onClick={() => {
                                                        // console.log("Subtask Clicked:", subTask)
                                                        setShowDetails(false)
                                                        setShowSubDetails(true)
                                                        setSelectedSubTask(subTask)

                                                    }}>
                                                        {subTask.subTaskName}
                                                    </div>
                                                </li>
                                            )) : <p className='w-full text-sm text-center p-6 text-gray-600'>No sub task found, Create One!</p>
                                    }

                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* COMMENT */}
                    <div className="-mx-6">
                        <div className="border-t border-[#e5e7eb] px-6 pt-3">
                            <div className="flex gap-6 text-sm text-gray-500">
                                <button className="border-b-2 border-indigo-500 pb-1 text-sm text-indigo-600">
                                    Comments
                                </button>
                            </div>
                        </div>


                        <div className="px-6 pt-3 font-jukarta">
                            <div className=" px-2  py-1.5 mb-2 rounded-lg">
                                <form action="" onSubmit={console.log("")}>
                                    <fieldset className="fieldset  text-left relative" >
                                        <legend className="fieldset-legend text-black gap-1 justify-center items-center flex">
                                            <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                            <p className='text-[14px]'>Foysa Hossain</p>
                                        </legend>
                                        <textarea className="textarea h-30 w-full bg-white border border-gray-500/20" placeholder="Write your thought.."></textarea>
                                        <button className="absolute bottom-2.5 right-2 w-15 bg-indigo-200 text-indigo-800 font-semibold text-[14px] p-1.5 rounded-sm cursor-pointer z-10" type='submit'>Post</button>
                                    </fieldset>
                                </form>
                            </div>


                            <div className="flex flex-col gap-4 mb-5">
                                <div className="text-left">

                                    {/* MAIN COMMENT */}
                                    <div className=" p-2 rounded-lg">

                                        <div className="">
                                            <div className="flex gap-1 justify-between items-center ">
                                                <div className="flex items-center gap-1">
                                                    <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                                    <p className='text-[14px]'>Foysa Hossain</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[14px]'>Oct 16, 2026</p>
                                                    <p className='text-[14px]'>10:41 AM</p>
                                                </div>
                                            </div>

                                            <p className='text-sm text-left mt-1 ml-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia, dolores cumque ratione iusto dolore ab quas mollitia nihil minima?</p>

                                        </div>


                                        {/* SUB COMMENTS */}

                                        <div className="pl-5 mt-2">
                                            <div className="border-l border-gray-300 pl-4">
                                                <div className="flex gap-1 justify-between items-center ">
                                                    <div className="flex items-center gap-1">
                                                        <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                                        <p className='text-[14px]'>Foysa Hossain</p>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <p className='text-[14px]'>Oct 16, 2026</p>
                                                        <p className='text-[14px]'>10:41 AM</p>
                                                    </div>
                                                </div>

                                                <p className='text-sm text-left mt-1 ml-7 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia, dolores cumque ratione iusto dolore ab quas mollitia nihil minima?</p>

                                            </div>


                                            <div className="border-l border-gray-300 pl-4">
                                                <div className="flex gap-1 justify-between items-center ">
                                                    <div className="flex items-center gap-1">
                                                        <p className='h-6 w-6 bg-amber-500 rounded-lg'></p>
                                                        <p className='text-[14px]'>Foysa Hossain</p>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <p className='text-[14px]'>Oct 16, 2026</p>
                                                        <p className='text-[14px]'>10:41 AM</p>
                                                    </div>
                                                </div>

                                                <p className='text-sm text-left mt-1 ml-7 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia, dolores cumque ratione iusto dolore ab quas mollitia nihil minima?</p>

                                            </div>


                                        </div>



                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default MainTasks;