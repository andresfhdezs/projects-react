import React from 'react'
import { NavLink} from 'react-router-dom'

const SignetOutLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to="/">Registro</NavLink> </li>
            <li> <NavLink to="/">Entrar</NavLink> </li>
        </ul>
    )
}

export default SignetOutLinks