import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function LoginHero() {

    const location = useLocation();
    const history = useHistory();

    let defaultClass = "nav-link link-btn";
    let active = " active";

    const register = () => {
        history.push("/register")
    }
    const login = () => {
        history.push("/login")
    }

    return (
            <div className="base-login col-md-5 col-lg-4">
                <div className="link">
                    <button type="button" onClick={login} className={location.pathname === "/login"? defaultClass + active: defaultClass}>Login</button>
                    <button type="button" onClick={register} className={location.pathname === "/register"? defaultClass + active: defaultClass}>Register</button>
                </div>
            </div>
    )
}

export default LoginHero
