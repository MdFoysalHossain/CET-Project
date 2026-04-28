import React, { useState } from 'react';
import ProjectsFilter from './Components/Projects/ProjectsFilter';
import AllProjects from './Components/Projects/AllProjects';
// import OrgProjectDetails from '../../Public/OrgProjectDetails';
import ProjectInputForm from './Components/Projects/ProjectInputForm';
import { Helmet } from 'react-helmet';

const DashbordProjects = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [createdProject, setCreatedProject] = useState([])
    const [allProjects, setAllProjects] = useState()


    return (
        <div className='flex flex-col'>

            <Helmet>
                <title>TrackLio - All Projects</title>
            </Helmet>

            <div className="w-full  mx-auto flex-1 border-b border-[#e5e7eb]">
                <div className="max-w-[1330px] mx-auto">
                    <ProjectsFilter setCreatedProject={setCreatedProject} setAllProjects={setAllProjects} allProjects={allProjects}/>
                </div>
            </div>

            <div className="max-w-[1330px] mx-auto">
                <AllProjects allProjects={allProjects} setAllProjects={setAllProjects} createdProject={createdProject} showDetails={showDetails} setShowDetails={setShowDetails} />
            </div>

            {/* <OrgProjectDetails showDetails={showDetails} setShowDetails={setShowDetails} /> */}

        </div>
    );
};

export default DashbordProjects;