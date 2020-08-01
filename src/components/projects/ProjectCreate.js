import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export class ProjectCreate extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeContent = (value) => {
        console.log(value)
        this.setState({
            "content": value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/')
    }


    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darkend-3">Crear Nuevo Proyecto</h5>
                    <div className="input-field">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        {/* <label htmlFor="content">Project Content</label> */}
                        {/* <textarea name="content" className="materialize-textarea" onChange={this.handleChange}></textarea> */}
                        <ReactQuill
                            theme="snow"
                            value={this.state.content}
                            onChange={this.handleChangeContent}
                        >

                        </ReactQuill>
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(ProjectCreate)
