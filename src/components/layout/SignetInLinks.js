import React from 'react'
import { NavLink} from 'react-router-dom'

const SignetInLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to="/projects/create">Nuevo Projecto</NavLink> </li>
            <li> <NavLink to="/">Salir</NavLink> </li>
            <li> <NavLink to="/" className="btn btn-floating pink lighten-1">AH</NavLink> </li>
        </ul>
    )
}

export default SignetInLinks