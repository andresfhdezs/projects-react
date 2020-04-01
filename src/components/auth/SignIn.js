import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, googleSignIn, singInPhone, singInPhoneCode } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

export class SignIn extends Component {

    state = {
        email: '',
        password: '',
        phoneNumber: '',
        code: ''
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitPhoneNumberAuthCode = e => {
        e.preventDefault();
        this.props.singInPhoneCode(this.state)
    }

    submitPhoneNumberAuth = e => {
        e.preventDefault();
        this.props.singInPhone(this.state)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    socialLoginGoogle = () => {
        this.props.googleSignIn();
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
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

                    <div className="input-field">
                        <button onClick={() => this.socialLoginGoogle()} className="google btn"><i className="fa fa-google fa-fw">
                        </i> Entrar con Google+
                        </button>
                    </div>


                </form>

                <form onSubmit={this.submitPhoneNumberAuth} className="white">
                    <label htmlFor="phoneNumber">Celular</label>
                    <input type="text" name="phoneNumber" onChange={this.handleChange} />
                    
                    <button type="submit">SIGN IN WITH PHONE</button>

                </form>
                <form onSubmit={this.submitPhoneNumberAuthCode} className="white">
                    <label htmlFor="code">Código</label>
                    <input type="number" name="code" onChange={this.handleChange} />
                    
                    <button type="submit">SIGN IN WITH PHONE</button>

                </form>

                <div id="recaptcha-container"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        googleSignIn: () => dispatch(googleSignIn()),
        singInPhone: (creds) => dispatch(singInPhone(creds)),
        singInPhoneCode: (creds) => dispatch(singInPhoneCode(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
