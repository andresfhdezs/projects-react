import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignetInLinks = (props) => {
    // console.log(props)
    const icono = props.profile.photoURL ? <NavLink to="/" className="btn btn-floating pink lighten-1"> <img src={props.profile.photoURL} alt={props.profile.initials} width="40px" height="40px" /></NavLink> : <NavLink to="/" className="btn btn-floating pink lighten-1">{ props.profile.initials }</NavLink>;
    
    return (
        <ul className="right">
            <li> <NavLink to="/projects/create">Nuevo Projecto</NavLink> </li>
            <li><a href="#/" onClick={props.signOut}>Log Out</a></li>
            <li>{icono}</li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignetInLinks)