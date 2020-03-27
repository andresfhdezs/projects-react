import React from 'react'
import ProjectSummary from './ProjectSummary'


const ProjectList = () => {
    return (
        <div className="project-list section">
            
            <ProjectSummary />
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Titulo Proyecto</span>
                    <p>Por: Andrés Hernández</p>
                    <p className="text-grey">27 marzo, 2am</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Titulo Proyecto</span>
                    <p>Por: Andrés Hernández</p>
                    <p className="text-grey">27 marzo, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectList