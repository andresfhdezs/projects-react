import React from 'react'
import { Link } from 'react-router-dom'
import SignetInLinks from './SignetInLinks'
import SignetOutLinks from './SignetOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;

    const links = auth.uid ? <SignetInLinks profile={profile} /> : <SignetOutLinks />;
    return (
        <nav className="nav-wrapper color-principal">
            <div className="container">
                <Link to="/" className="brand-logo left"><img className="img-brand"alt="" src="img/nav/logo.png"></img></Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);