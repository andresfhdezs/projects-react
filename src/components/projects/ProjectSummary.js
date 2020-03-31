import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> { project.title } | {project.id} </span>
                <p>Por: { project.authorFirstName } { project.authorLastName }</p>
                <p className="text-grey">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary