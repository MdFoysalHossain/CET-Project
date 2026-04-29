import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../../../Context/SettingsProvidor';
import { AuthContext } from '../../../../Context/AccountProvidor';
import AllSingleProject from "../Projects/Components/AllSingleProject";
import AllSingleProjectSkeleton from './Components/AllSingleProjectSkeleton';

const AllProjects = ({ showDetails, setShowDetails, createdProject, setAllProjects, allProjects }) => {
    const { backEndUrl } = useContext(SettingsContext);
    const { accountDetails } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!accountDetails?.email) return; 

        const fetchDetails = async () => {
            try {
                setIsLoading(true);

                const token = await accountDetails.getIdToken();

                const res = await fetch(
                    `${backEndUrl}/getProjects?email=${accountDetails.email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }
                );

                const data = await res.json();
                setAllProjects(data);

            } catch (error) {
                console.log("Can not get projects:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
    }, [backEndUrl, accountDetails, setAllProjects]);

    return (
        <div className='max-w-[1330px]'>

            <div className="w-full mt-5 flex flex-col">

                <div className="grid grid-cols-3 gap-5">

                    {/* 🔹 Show Skeletons While Loading */}
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <AllSingleProjectSkeleton key={i} />
                        ))
                    ) : (
                        allProjects
                            ?.filter(project => project.state === "normal")
                            .map((project, index) => (
                                <AllSingleProject
                                    key={index}
                                    allProjects={allProjects}
                                    setAllProjects={setAllProjects}
                                    project={project}
                                    index={index}
                                />
                            ))
                    )}

                </div>

            </div>

        </div>
    );
};

export default AllProjects;