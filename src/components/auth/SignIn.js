import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

export class SignIn extends Component {

    state = {
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
        // console.log(this.state);
        this.props.signIn(this.state)
    }

    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darkend-3">Iniciar Sesión</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Entrar</button>
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
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
