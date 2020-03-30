import React from 'react'
import {Link} from 'react-router-dom'
import SignetInLinks from './SignetInLinks'
import SignetOutLinks from './SignetOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
             <div className="container">
                 <Link to="/" className="brand-logo"> Aplus Express</Link>
                 <SignetInLinks/>
                 <SignetOutLinks/>
             </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Navbar);