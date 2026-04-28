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

    const [allTodo, setAllTodo] = useState([
        {
            id: 1,
            projectName: "bKash Website Redesign",
            title: "Design Landing Page UI",
            description: "Create modern landing page UI with hero section, features, and CTA.",
            assignedTo: ["User1", "User2"],
            dueDate: "2024-02-01",
            createdAt: "2024-01-01T10:00:00",
            status: "In Progress",
            priority: "High",
            createdBy: "user1@example.com",

            comments: [
                {
                    id: 1,
                    userName: "User1",
                    userEmail: "user1@example.com",
                    text: "Started working on hero section.",
                    subComments: [
                        {
                            id: 1,
                            text: "Use gradient background.",
                            userName: "User2",
                            userEmail: "user2@example.com",
                        }
                    ]
                }
            ],

            attachments: [
                {
                    id: 1,
                    fileName: "landing-design",
                    fileType: "image/png",
                    link: "https://example.com/landing.png"
                }
            ],

            subTasks: [
                {
                    id: 1,
                    projectName: "bKash Website Redesign",
                    title: "Landing Page UI",
                    subTitle: "Hero Section",
                    description: "Design hero section with CTA button.",
                    comments: [],
                    attachments: []
                },
                {
                    id: 2,
                    projectName: "bKash Website Redesign",
                    title: "Landing Page UI",
                    subTitle: "Features Section",
                    description: "Highlight core features with icons.",
                    comments: [],
                    attachments: []
                }
            ]
        },

        {
            id: 2,
            projectName: "bKash Website Redesign",
            title: "Implement Responsive Layout",
            description: "Ensure full responsiveness across devices.",
            assignedTo: ["User3"],
            dueDate: "2024-02-05",
            createdAt: "2024-01-02T09:30:00",
            status: "To Do",
            priority: "Medium",
            createdBy: "user2@example.com",

            comments: [
                {
                    id: 1,
                    userName: "User3",
                    userEmail: "user3@example.com",
                    text: "Will start with mobile-first approach.",
                    subComments: []
                }
            ],

            attachments: [],

            subTasks: [
                {
                    id: 1,
                    projectName: "bKash Website Redesign",
                    title: "Responsive Layout",
                    subTitle: "Mobile View",
                    description: "Optimize layout for small screens.",
                    comments: [],
                    attachments: []
                },
                {
                    id: 2,
                    projectName: "bKash Website Redesign",
                    title: "Responsive Layout",
                    subTitle: "Tablet View",
                    description: "Adjust layout for tablets.",
                    comments: [],
                    attachments: []
                }
            ]
        },

        {
            id: 3,
            projectName: "bKash Website Redesign",
            title: "API Integration",
            description: "Connect frontend with backend APIs.",
            assignedTo: ["User4", "User5"],
            dueDate: "2024-02-10",
            createdAt: "2024-01-03T11:00:00",
            status: "To Do",
            priority: "High",
            createdBy: "user3@example.com",

            comments: [
                {
                    id: 1,
                    userName: "User4",
                    userEmail: "user4@example.com",
                    text: "Waiting for backend endpoints.",
                    subComments: [
                        {
                            id: 1,
                            text: "Will be ready by tomorrow.",
                            userName: "User5",
                            userEmail: "user5@example.com",
                        }
                    ]
                }
            ],

            attachments: [
                {
                    id: 1,
                    fileName: "api-doc",
                    fileType: "application/pdf",
                    link: "https://example.com/api.pdf"
                }
            ],

            subTasks: [
                {
                    id: 1,
                    projectName: "bKash Website Redesign",
                    title: "API Integration",
                    subTitle: "Fetch User Data",
                    description: "Integrate user profile API.",
                    comments: [],
                    attachments: []
                },
                {
                    id: 2,
                    projectName: "bKash Website Redesign",
                    title: "API Integration",
                    subTitle: "Transaction API",
                    description: "Display transaction history.",
                    comments: [],
                    attachments: []
                }
            ]
        },

        {
            id: 4,
            projectName: "bKash Website Redesign",
            title: "Testing & Bug Fixing",
            description: "Perform QA testing and fix bugs.",
            assignedTo: ["QA1"],
            dueDate: "2024-02-15",
            createdAt: "2024-01-05T08:45:00",
            status: "To Do",
            priority: "Low",
            createdBy: "user1@example.com",

            comments: [
                {
                    id: 1,
                    userName: "QA1",
                    userEmail: "qa@example.com",
                    text: "Will prepare test cases.",
                    subComments: []
                }
            ],

            attachments: [],

            subTasks: [
                {
                    id: 1,
                    projectName: "bKash Website Redesign",
                    title: "Testing",
                    subTitle: "UI Testing",
                    description: "Check UI consistency.",
                    comments: [],
                    attachments: []
                },
                {
                    id: 2,
                    projectName: "bKash Website Redesign",
                    title: "Testing",
                    subTitle: "Functionality Testing",
                    description: "Verify all features.",
                    comments: [],
                    attachments: []
                }
            ]
        },

        {
            id: 5,
            projectName: "bKash Website Redesign",
            title: "Deployment",
            description: "Deploy website to production server.",
            assignedTo: ["DevOps"],
            dueDate: "2024-02-20",
            createdAt: "2024-01-06T12:00:00",
            status: "To Do",
            priority: "Medium",
            createdBy: "admin@example.com",

            comments: [
                {
                    id: 1,
                    userName: "DevOps",
                    userEmail: "devops@example.com",
                    text: "Preparing deployment pipeline.",
                    subComments: []
                }
            ],

            attachments: [
                {
                    id: 1,
                    fileName: "deployment-guide",
                    fileType: "application/pdf",
                    link: "https://example.com/deploy.pdf"
                }
            ],

            subTasks: [
                {
                    id: 1,
                    projectName: "bKash Website Redesign",
                    title: "Deployment",
                    subTitle: "Server Setup",
                    description: "Configure hosting server.",
                    comments: [],
                    attachments: []
                },
                {
                    id: 2,
                    projectName: "bKash Website Redesign",
                    title: "Deployment",
                    subTitle: "CI/CD Setup",
                    description: "Automate deployment pipeline.",
                    comments: [],
                    attachments: []
                }
            ]
        }
    ]);


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

            <CreateTask isOpen={createTaskOpen} setCreateTaskOpen={setCreateTaskOpen} onClose={() => setCreateTaskOpen(false)} />

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