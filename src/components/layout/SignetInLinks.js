import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignetInLinks = (props) => {
    // console.log(props)
    const image = props.profile.photoURL ? <img src={props.profile.photoURL} alt={props.profile.initials} width="40px" height="40px" /> : props.profile.initials;
    
    return (
        <ul className="right">
            <li> <NavLink to="/projects/create">Nuevo Projecto</NavLink> </li>
            <li><a href="#/" onClick={props.signOut}>Log Out</a></li>
            <NavLink to="/profile" className="btn btn-floating pink lighten-1"> {image} </NavLink>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignetInLinks)


/* <div className="row">
    <Tooltip text='Simple tooltip'>
        <button>Hover me!</button>
    </Tooltip>
</div> */
