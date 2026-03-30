import React, { useState } from 'react';
import ProjectsFilter from './Components/Projects/ProjectsFilter';
import AllProjects from './Components/Projects/AllProjects';
// import OrgProjectDetails from '../../Public/OrgProjectDetails';
import ProjectInputForm from './Components/Projects/ProjectInputForm';

const DashbordProjects = () => {

    const [showDetails, setShowDetails] = useState(false);
    

    return (
        <div className='max-w-[1330px] mx-auto flex flex-col'>

            
            <ProjectsFilter />

            <AllProjects showDetails={showDetails} setShowDetails={setShowDetails} />

            {/* <OrgProjectDetails showDetails={showDetails} setShowDetails={setShowDetails} /> */}

        </div>
    );
};

export default DashbordProjects;