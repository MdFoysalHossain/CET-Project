import { ChevronLeft, Ellipsis, MessagesSquare, Paperclip, Plus, SquareChevronLeft, StepBack } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import MainTasks from '../Projects/Task/MainTasks';
import CreateTask from '../Projects/Task/Component/CreateTask';
import SubTask from '../Projects/Task/SubTask';
import CreateSubTask from '../Projects/Task/Component/CreateSubTask';
import SingleToDo from './Component/SingleToDo';
import { link, sub } from 'framer-motion/client';
import { Link, useParams } from 'react-router';
import { SettingsContext } from '../../../../Context/SettingsProvidor';
import { AuthContext } from '../../../../Context/AccountProvidor';
import { cosineDistance } from 'firebase/firestore/pipelines';
import CreateAttachment from '../Projects/Task/Component/CreateAttachment';
import { Helmet } from 'react-helmet';

const SingleProjectPage = () => {
    

    const { backEndUrl } = useContext(SettingsContext)
    const { accountDetails, accountLoading, isLoggedIn } = useContext(AuthContext)

    const { id: projectId } = useParams()

    console.log("Single Project Parems", projectId)

    const [showDetails, setShowDetails] = useState(false);
    const [showSubDetails, setShowSubDetails] = useState(false);

    const [createTaskOpen, setCreateTaskOpen] = useState(false);
    const [createSubTaskOpen, setCreateSubTaskOpen] = useState(false);

    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedSubTask, setSelectedSubTask] = useState();

    const [allSubTask, setAllSubTask] = useState([])

    const [todoTask, setTodoTask] = useState(null)
    const [inProgressTask, setInProgress] = useState(null)
    const [inQATask, setInQATask] = useState(null)
    const [finishedTask, setFinishedTask] = useState(null)

    const [showAttachment, setShowAttachment] = useState(false)
    const [attachments, setAttachment] = useState([])
    const [attachUpdated, setAttachUpdated] = useState(false)

    const [projectDetails, setProjectDetails] = useState()

    

    useEffect(() => {
        if(accountLoading === true){return}

        const fetchDetails = async () => {
            const token = await accountDetails?.getIdToken();
            fetch(backEndUrl + "/getProjects?email=" + accountDetails.email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    const currentProject = res.find(item => item._id === projectId)
                    setProjectDetails(currentProject)
                })
                .catch(error => console.log("Can not get projects:", error))
        }
        console.log("Fetched Details")

        fetchDetails()
    }, [backEndUrl, accountDetails])


    useEffect(() => {
        if(accountLoading === true || isLoggedIn === false){return}

        const fetchTodo = async () => {
            const token = await accountDetails?.getIdToken();
            fetch(`${backEndUrl}/getTasks?email=${accountDetails.email}&projectId=${projectId}&status=todo`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setTodoTask([...res])
                })
                .catch(error => console.log("Can not get projects:", error))
        }
        console.log("Fetched Details")

        const fetchInProgress = async () => {
            const token = await accountDetails?.getIdToken();
            fetch(`${backEndUrl}/getTasks?email=${accountDetails.email}&projectId=${projectId}&status=inprogress`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setInProgress([...res])
                })
                .catch(error => console.log("Can not get projects:", error))
        }
        console.log("Fetched Details")

        const fetchQA = async () => {
            const token = await accountDetails?.getIdToken();
            fetch(`${backEndUrl}/getTasks?email=${accountDetails.email}&projectId=${projectId}&status=QA`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setInQATask([...res])
                })
                .catch(error => console.log("Can not get projects:", error))
        }
        console.log("Fetched Details")

        const fetchFinished = async () => {
            const token = await accountDetails?.getIdToken();
            fetch(`${backEndUrl}/getTasks?email=${accountDetails.email}&projectId=${projectId}&status=Finished`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setFinishedTask([...res])
                })
                .catch(error => console.log("Can not get projects:", error))
        }
        console.log("Fetched Details")

        fetchTodo()
        fetchInProgress()
        fetchQA()
        fetchFinished()
    }, [backEndUrl, accountDetails])


    return (
        <div className='' >
            {
                console.log(projectDetails)
            }
            <Helmet>
                <title>{`TrackLio - ${projectDetails && projectDetails?.name}`}</title>
            </Helmet>

            <MainTasks showDetails={showDetails}
                attachments={attachments}
                allSubTask={allSubTask}
                setAllSubTask={setAllSubTask}
                setShowDetails={setShowDetails}
                setShowSubDetails={setShowSubDetails}
                createSubTaskOpen={createSubTaskOpen}
                setCreateSubTaskOpen={setCreateSubTaskOpen}
                selectedTask={selectedTask}
                setSelectedSubTask={setSelectedSubTask}
                setShowAttachment={setShowAttachment}
                attachUpdated={attachUpdated}
            />

            {console.log("Selected Task", selectedTask)}

            <SubTask allSubTask={allSubTask} selectedSubTask={selectedSubTask} showSubDetails={showSubDetails} setShowSubDetails={setShowSubDetails} setShowDetails={setShowDetails} />

            <CreateTask setFinishedTask={setFinishedTask} setInQATask={setInQATask} setInProgress={setInProgress} setTodoTask={setTodoTask} isOpen={createTaskOpen} setCreateTaskOpen={setCreateTaskOpen} onClose={() => setCreateTaskOpen(false)} />

            <CreateAttachment setAttachment={setAttachment} setAttachUpdated={setAttachUpdated} selectedTask={selectedTask} showAttachment={showAttachment} setShowAttachment={setShowAttachment} />

            <CreateSubTask selectedTask={selectedTask} allSubTask={allSubTask} setAllSubTask={setAllSubTask} createSubTaskOpen={createSubTaskOpen} setCreateSubTaskOpen={setCreateSubTaskOpen} />

            <div className="border-b border-[#e5e7eb]  h-[65px] mb-5">
                <div className="text-left max-w-[1330px] mx-auto flex items-center">
                    <Link to={"/Dashboard/Projects"}>
                        <ChevronLeft strokeWidth={1.25} size={45} className='border border-gray-300 hover:border-black hover:text-black mr-2 rounded-sm transition text-gray-400' />
                    </Link>
                    <div className=" flex flex-col items-start justify-center ">
                        <h2 className='text-2xl font-semibold font-jukarta'>All Task</h2>
                        <p className='text-md font-jukarta text-gray-600/90'>{projectDetails && projectDetails?.name}</p>
                    </div>
                </div>
            </div>


            <div className="max-w-[1330px] mx-auto">
                <div className=" grid grid-cols-4 gap-4 mt-10">



                    <div className="bg-gray-300/30 rounded-xl  p-2 pb-0 pt-4">
                        <div className="flex justify-between items-center">
                            <div className="text-left font-jukarta flex items-center gap-1.5">
                                <p className='h-2.5 w-2.5 rounded-3xl bg-orange-400'></p>
                                <p className='text-lg'>To Do</p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <Plus size={18} className='cursor-pointer' onClick={() => setCreateTaskOpen(true)} />
                                <Ellipsis size={18} className='cursor-pointer' />
                            </div>
                        </div>

                        {/* ALL TO DO TASK */}
                        <div className="mt-4">
                            {
                                console.log("Tasks", todoTask)
                            }
                            {
                                todoTask?.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                    todoTask?.map((todo, index) => (
                                        // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                        <div className="" key={index} onClick={() => {
                                            console.log("Rendering ToDo:", selectedTask)
                                            setSelectedTask(todo)
                                        }}>

                                            <SingleToDo
                                                todo={todo}
                                                setShowDetails={setShowDetails}
                                                setSelectedSubTask={setSelectedSubTask}
                                                setSelectedTask={setSelectedTask}
                                                selectedTask={selectedTask}

                                            />

                                        </div>
                                    ))
                            }

                        </div>

                    </div>



                    <div className="bg-gray-300/30 rounded-xl  p-2 pb-0 pt-4">
                        <div className="flex justify-between items-center">
                            <div className="text-left font-jukarta flex items-center gap-1.5">
                                <p className='h-2.5 w-2.5 rounded-3xl bg-indigo-400'></p>
                                <p className='text-lg'>In Progress</p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <Plus size={18} className='cursor-pointer' onClick={() => setCreateTaskOpen(true)} />
                                <Ellipsis size={18} className='cursor-pointer' />
                            </div>
                        </div>

                        {/* ALL TO DO TASK */}
                        <div className="mt-4">
                            {
                                inProgressTask?.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                    inProgressTask?.map((todo, index) => (
                                        // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                        <div className="" key={index} onClick={() => {
                                            console.log("Rendering ToDo:", selectedTask)
                                            setSelectedTask(todo)
                                        }}>

                                            <SingleToDo
                                                todo={todo}
                                                setShowDetails={setShowDetails}
                                                setSelectedSubTask={setSelectedSubTask}
                                                setSelectedTask={setSelectedTask}
                                                selectedTask={selectedTask}
                                            />

                                        </div>
                                    ))
                            }

                        </div>

                    </div>


                    <div className="bg-gray-300/30 rounded-xl  p-2 pb-0 pt-4">
                        <div className="flex justify-between items-center">
                            <div className="text-left font-jukarta flex items-center gap-1.5">
                                <p className='h-2.5 w-2.5 rounded-3xl bg-purple-400'></p>
                                <p className='text-lg'>QA</p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <Plus size={18} className='cursor-pointer' onClick={() => setCreateTaskOpen(true)} />
                                <Ellipsis size={18} className='cursor-pointer' />
                            </div>
                        </div>

                        {/* ALL TO DO TASK */}
                        <div className="mt-4">
                            {
                                inQATask?.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                    inQATask?.map((todo, index) => (
                                        // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                        <div className="" key={index} onClick={() => {
                                            console.log("Rendering ToDo:", selectedTask)
                                            setSelectedTask(todo)
                                        }}>

                                            <SingleToDo
                                                todo={todo}
                                                setShowDetails={setShowDetails}
                                                setSelectedSubTask={setSelectedSubTask}
                                                setSelectedTask={setSelectedTask}
                                                selectedTask={selectedTask}

                                            />

                                        </div>
                                    ))
                            }

                        </div>

                    </div>


                    <div className="bg-gray-300/30 rounded-xl  p-2 pb-0 pt-4">
                        <div className="flex justify-between items-center">
                            <div className="text-left font-jukarta flex items-center gap-1.5">
                                <p className='h-2.5 w-2.5 rounded-3xl bg-purple-400'></p>
                                <p className='text-lg'>Finished</p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <Plus size={18} className='cursor-pointer' onClick={() => setCreateTaskOpen(true)} />
                                <Ellipsis size={18} className='cursor-pointer' />
                            </div>
                        </div>

                        {/* ALL TO DO TASK */}
                        <div className="mt-4">
                            {
                                finishedTask?.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                    finishedTask?.map((todo, index) => (
                                        // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                        <div className="" key={index} onClick={() => {
                                            console.log("Rendering ToDo:", selectedTask)
                                            setSelectedTask(todo)
                                        }}>

                                            <SingleToDo
                                                todo={todo}
                                                setShowDetails={setShowDetails}
                                                setSelectedSubTask={setSelectedSubTask}
                                                setSelectedTask={setSelectedTask}
                                                selectedTask={selectedTask}
                                            />

                                        </div>
                                    ))
                            }

                        </div>

                    </div>





                </div>
            </div>


        </div >
    );
};

export default SingleProjectPage;