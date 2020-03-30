import React from 'react'

const ProjectSummary = ({project}) => {
    console.log(project)
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> { project.title } | {project.id} </span>
                <p>Por: Andrés Hernández</p>
                <p className="text-grey">27 marzo, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary