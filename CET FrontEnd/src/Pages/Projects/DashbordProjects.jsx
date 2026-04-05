import React, { useState } from 'react';
import ProjectsFilter from './Components/Projects/ProjectsFilter';
import AllProjects from './Components/Projects/AllProjects';
// import OrgProjectDetails from '../../Public/OrgProjectDetails';
import ProjectInputForm from './Components/Projects/ProjectInputForm';

const DashbordProjects = () => {

    const [showDetails, setShowDetails] = useState(false);


    return (
        <div className='flex flex-col'>



            <div className="w-full  mx-auto flex-1 border-b border-[#e5e7eb]">
                <div className="max-w-[1330px] mx-auto">
                    <ProjectsFilter />
                </div>
            </div>

            <div className="max-w-[1330px] mx-auto">
                <AllProjects showDetails={showDetails} setShowDetails={setShowDetails} />
            </div>

            {/* <OrgProjectDetails showDetails={showDetails} setShowDetails={setShowDetails} /> */}

        </div>
    );
};

export default DashbordProjects;