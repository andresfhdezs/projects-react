import React, { Component } from 'react'

export class ProjectCreate extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darkend-3">Crear Nuevo Proyecto</h5>
                    <div className="input-field">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProjectCreate
