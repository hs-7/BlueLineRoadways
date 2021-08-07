import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    
    let{islogin, setIslogin}=props.logData;
   
    // const checkLogin = () => {
    //     if(localStorage.getItem("x-access-token")){
    //         return true;
    //     }
    //     else{ 
    //         return false;
    //     }
    // }


    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light col-md-12 mx-auto">
        <div className="container-fluid position-relative col-md-11 mx-auto">
            <Link className="navbar-brand" to="/"><span className="brandText">BlueLine</span>Roadways</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="#">Features</Link>
                {!islogin?
                <Link className="nav-link" to="/login" tabindex="-1" aria-disabled="true">LogIn&#x25BC;</Link>:
                <Link className="nav-link" to="/" onClick={()=>{localStorage.removeItem("x-access-token"); setIslogin(false);}} tabindex="-1" aria-disabled="true">LogOut&#x25BC;</Link>}
            </div>
            </div>
        </div>
        </nav>
    )
}
