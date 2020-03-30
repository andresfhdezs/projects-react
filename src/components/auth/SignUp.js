import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

export class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darkend-3">Registro</h5>

                    <div className="input-field">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" name="firstName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" name="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Registro</button>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(SignUp)
