import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function Navbar(props) {
    
    let location = new useHistory();
    let{islogin, setIslogin}=props.logData;
    const [homeActive, sethomeActive] = useState(location.location.pathname=="/"?true:false)
    const [actActive, setactActive] = useState(location.location.pathname=="/profile"?true:false)
    const [logActive, setlogActive] = useState(location.location.pathname=="/login"||"/register"?true:false)

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light col-md-12 mx-auto">
        <div className="container-fluid position-relative col-md-11 mx-auto">
            <Link className="navbar-brand" to="/"><span className="brandText">BlueLine</span>Roadways</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className={homeActive?"nav-link active":"nav-link"} onClick={()=>sethomeActive(true)&setactActive(false)&setlogActive(false)} aria-current="page" to="/"><b>Home</b></Link>
                {islogin?<Link className={actActive?"nav-link active":"nav-link"} to="/profile" onClick={()=>setactActive(true)&sethomeActive(false)&setlogActive(false)}><b>Account</b></Link>:""}
                {!islogin?
                <Link className={logActive?"nav-link active":"nav-link"} to="/login" tabindex="-1" aria-disabled="true" onClick={()=>setactActive(false)&sethomeActive(false)&setlogActive(true)}>LogIn&#x25BC;</Link>:
                <Link className="nav-link" to="/" onClick={()=>{localStorage.removeItem("x-access-token"); setIslogin(false);}} tabindex="-1" aria-disabled="true"><b>LogOut&#x25BC;</b></Link>
                }
            </div>
            </div>
        </div>
        </nav>
    )
}
