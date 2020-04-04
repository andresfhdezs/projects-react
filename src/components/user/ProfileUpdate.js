import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { updateProfile, updateProfileEmail } from '../../store/actions/profileActions'
// import profile from './profile'

class ProfileUpdate extends Component {

    state = {
        firstName: '',
        lastName: '',
        // photoURL: '',
        email: ''
    }
    
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.updateProfile(this.state)
    }

    handleSubmitEmail = e => {
        e.preventDefault();
        this.props.updateProfileEmail(this.state)
    }
    
    render() {
        const { authError } = this.props;
        
        // if (auth.uid) return <Redirect to='/profile' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darkend-3">Actualizar Perfil</h5>

                    <div className="input-field">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" name="firstName" onChange={this.handleChange}  />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" name="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <input type="file" name="photoURL" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Enviar</button>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>

                <form onSubmit={this.handleSubmitEmail} className="white">
                    <h5 className="grey-text text-darkend-3">Actualizar Email</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange}  />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Enviar</button>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // auth: state.firebase.auth,
        // profile: state.firebase.profile,
        authError: state.auth.authError
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        updateProfile: (creds) => dispatch(updateProfile(creds)),
        updateProfileEmail: (cred) => dispatch(updateProfileEmail(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(ProfileUpdate)
