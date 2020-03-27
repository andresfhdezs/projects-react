import React from 'react'

const ProjectDetail = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Titulo Proyecto - { id }</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis porro eligendi at eius quibusdam quisquam eos beatae repellat excepturi id in, ipsum unde amet reiciendis facere qui. Laudantium, quod.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Por: Andrés Hernández</div>
                    <div>27 marzo, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
