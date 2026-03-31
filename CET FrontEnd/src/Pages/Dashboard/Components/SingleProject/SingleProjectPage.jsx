import { Ellipsis, MessagesSquare, Paperclip, Plus } from 'lucide-react';
import React, { useState } from 'react';
import MainTasks from '../Projects/Task/MainTasks';
import CreateTask from '../Projects/Task/Component/CreateTask';
import SubTask from '../Projects/Task/SubTask';
import CreateSubTask from '../Projects/Task/Component/CreateSubTask';
import SingleToDo from './Component/SingleToDo';

const SingleProjectPage = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [showSubDetails, setShowSubDetails] = useState(false);

    const [createTaskOpen, setCreateTaskOpen] = useState(false);
    const [createSubTaskOpen, setCreateSubTaskOpen] = useState(false);

    return (
        <div className='' >
            <MainTasks showDetails={showDetails}
                setShowDetails={setShowDetails}

                setShowSubDetails={setShowSubDetails}

                createSubTaskOpen={createSubTaskOpen}
                setCreateSubTaskOpen={setCreateSubTaskOpen}
            />


            <SubTask showSubDetails={showSubDetails} setShowSubDetails={setShowSubDetails} setShowDetails={setShowDetails} />

            <CreateTask isOpen={createTaskOpen} onClose={() => setCreateTaskOpen(false)} />
            <CreateSubTask createSubTaskOpen={createSubTaskOpen} setCreateSubTaskOpen={setCreateSubTaskOpen} />



            <div className="border-b border-[#e5e7eb]  h-[65px] mb-5">
                <div className="text-left max-w-[1330px] mx-auto">
                    <div className=" flex flex-col items-start justify-center ">
                        <h2 className='text-2xl font-semibold font-jukarta'>All Task</h2>
                        <p className='text-md font-jukarta text-gray-600/90'>Project: Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>


            <div className="max-w-[1330px] mx-auto">
                <div className=" grid grid-cols-4 gap-4 mt-10">
                    <div className="bg-gray-300/30 rounded-xl max-w-400 p-2 pb-0 pt-4">
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
                            {/* <p className='text-sm text-gray-500 my-5'>No tasks available</p> */}

                            <SingleToDo setShowDetails={setShowDetails} />

                        </div>

                    </div>



                </div>
            </div>


        </div >
    );
};

export default SingleProjectPage;