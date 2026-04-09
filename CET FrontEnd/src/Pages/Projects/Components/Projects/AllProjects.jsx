import { BookOpen, SquarePen, Trash2 } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { SettingsContext } from '../../../../Context/SettingsProvidor';
import { AuthContext } from '../../../../Context/AccountProvidor';
import { p } from 'framer-motion/client';
import AllSingleProject from "../Projects/Components/AllSingleProject"

const AllProjects = ({ showDetails, setShowDetails, createdProject,setAllProjects, allProjects}) => {
    const { backEndUrl } = useContext(SettingsContext)
    const { accountDetails } = useContext(AuthContext)


    useEffect(() => {
        const fetchDetails = async () => {
            const token = await accountDetails.getIdToken();
            fetch(backEndUrl + "/getProjects?email=" + accountDetails.email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(res => setAllProjects(res))
                .catch(error => console.log("Can not get projects:", error))
        }
        console.log("Fetched Details")

        fetchDetails()
    }, [backEndUrl, accountDetails])

    return (
        <div className='max-w-[1330px] '>

            <div className="w-full mt-5 flex flex-col">

                <div className="grid grid-cols-3 gap-5">

                    {
                        allProjects?.filter(project => project.state === "normal").map((project, index) => (
                                <AllSingleProject allProjects={allProjects} setAllProjects={setAllProjects} project={project} index={index} />
                            ))
                    }

                </div>


            </div>

        </div>
    );
};

export default AllProjects;