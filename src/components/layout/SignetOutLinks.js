import React from 'react'
import { NavLink} from 'react-router-dom'

const SignetOutLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to="/signin">Entrar</NavLink> </li>
            <li> <NavLink to="/signup">Registro</NavLink> </li>
        </ul>
    )
}

export default SignetOutLinks