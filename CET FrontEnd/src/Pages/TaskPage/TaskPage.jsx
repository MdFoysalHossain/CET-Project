import { Ellipsis, MessagesSquare, Paperclip, Plus } from 'lucide-react';
import React, { useState } from 'react';
import CreateSubTask from '../Projects/Components/Projects/Task/Component/CreateSubTask';
import CreateTask from '../Projects/Components/Projects/Task/Component/CreateTask';
import SubTask from '../Projects/Components/Projects/Task/SubTask';
import MainTasks from '../Projects/Components/Projects/Task/MainTasks';
import SingleToDo from '../Projects/Components/SingleProject/Component/SingleToDo';

const TaskPage = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showSubDetails, setShowSubDetails] = useState(false);

    const [createTaskOpen, setCreateTaskOpen] = useState(false);
    const [createSubTaskOpen, setCreateSubTaskOpen] = useState(false);

    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedSubTask, setSelectedSubTask] = useState({});


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
        <div className="">
            <MainTasks showDetails={showDetails}
                setShowDetails={setShowDetails}
                setShowSubDetails={setShowSubDetails}
                createSubTaskOpen={createSubTaskOpen}
                setCreateSubTaskOpen={setCreateSubTaskOpen}
                selectedTask={selectedTask}
                setSelectedSubTask={setSelectedSubTask}
            />

            <SubTask selectedSubTask={selectedSubTask} showSubDetails={showSubDetails} setShowSubDetails={setShowSubDetails} setShowDetails={setShowDetails} />

            <CreateTask isOpen={createTaskOpen} onClose={() => setCreateTaskOpen(false)} />

            <CreateSubTask createSubTaskOpen={createSubTaskOpen} setCreateSubTaskOpen={setCreateSubTaskOpen} />

            <title>ProjectNext - My Tasks</title>
            <div className="">
                <div className="flex items-center justify-between px-6 border-b border-gray-200 h-[65px]">
                    <div className="max-w-[1330px] mx-auto w-full flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-semibold font-jukarta">My Tasks</p>


                        </div>

                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-4 gap-4 mt-10 max-w-[1330px] mx-auto" >



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
                            allTodo.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                allTodo.map((todo) => (
                                    // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                    <div className="" key={todo.id} onClick={() => {
                                        console.log("Rendering ToDo:", selectedTask)
                                        setSelectedTask(todo)
                                    }}>

                                        <SingleToDo
                                            todo={todo}
                                            setShowDetails={setShowDetails}
                                            setSelectedSubTask={setSelectedSubTask}
                                            setSelectedTask={setSelectedTask}
                                            selectedTask={selectedTask}

                                        // onClick={() => {
                                        //     console.log("ToDo Clicked:", todo, selectedTask);
                                        //     // setSelectedTask(todo);
                                        // }
                                        // }
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
                            allTodo.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                allTodo.map((todo) => (
                                    // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                    <div className="" key={todo.id} onClick={() => {
                                        console.log("Rendering ToDo:", selectedTask)
                                        setSelectedTask(todo)
                                    }}>

                                        <SingleToDo
                                            todo={todo}
                                            setShowDetails={setShowDetails}
                                            setSelectedSubTask={setSelectedSubTask}
                                            setSelectedTask={setSelectedTask}
                                            selectedTask={selectedTask}

                                        // onClick={() => {
                                        //     console.log("ToDo Clicked:", todo, selectedTask);
                                        //     // setSelectedTask(todo);
                                        // }
                                        // }
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
                            allTodo.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                allTodo.map((todo) => (
                                    // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                    <div className="" key={todo.id} onClick={() => {
                                        console.log("Rendering ToDo:", selectedTask)
                                        setSelectedTask(todo)
                                    }}>

                                        <SingleToDo
                                            todo={todo}
                                            setShowDetails={setShowDetails}
                                            setSelectedSubTask={setSelectedSubTask}
                                            setSelectedTask={setSelectedTask}
                                            selectedTask={selectedTask}

                                        // onClick={() => {
                                        //     console.log("ToDo Clicked:", todo, selectedTask);
                                        //     // setSelectedTask(todo);
                                        // }
                                        // }
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
                            allTodo.length === 0 ? <p className='text-sm font-jukarta text-gray-500 my-5 bg-white p-4 rounded-sm border border-gray-200'>No tasks available</p> :
                                allTodo.map((todo) => (
                                    // <div className="" key={todo.id} onClick={() => console.log("Rendering ToDo:", todo)}>
                                    <div className="" key={todo.id} onClick={() => {
                                        console.log("Rendering ToDo:", selectedTask)
                                        setSelectedTask(todo)
                                    }}>

                                        <SingleToDo
                                            todo={todo}
                                            setShowDetails={setShowDetails}
                                            setSelectedSubTask={setSelectedSubTask}
                                            setSelectedTask={setSelectedTask}
                                            selectedTask={selectedTask}

                                        // onClick={() => {
                                        //     console.log("ToDo Clicked:", todo, selectedTask);
                                        //     // setSelectedTask(todo);
                                        // }
                                        // }
                                        />

                                    </div>
                                ))
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TaskPage;