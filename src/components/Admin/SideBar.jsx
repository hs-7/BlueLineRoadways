import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'

export default function SideBar() {

    const location = useLocation();
    const history = useHistory();

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light " id="navbarNavAltMarkup">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                    <span className="fs-4">Profile</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/admindash" className={location.pathname === "/admindash"? "nav-link active": "nav-link link-dark"} aria-current="page">
                        <svg className="bi me-2" width="16" height="16"><use href="#home"></use></svg>
                        Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/admindash/managebuses" className={location.pathname === "/admindash/managebuses"? "nav-link active": "nav-link link-dark"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#table"></use></svg>
                        Buses
                        </a>
                    </li>
                    <li>
                        <a href="/admindash/managestops" className={location.pathname === "/admindash/managestops"? "nav-link active": "nav-link link-dark"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#grid"></use></svg>
                        Stops
                        </a>
                    </li>
                    <li>
                        <a href="/admindash/manageroutes" className={location.pathname === "/admindash/manageroutes"? "nav-link active": "nav-link link-dark"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                        Routes
                        </a>
                    </li>
                    <li>
                        <a href="/admindash/manageschedules" className={location.pathname === "/admindash/manageschedules"? "nav-link active": "nav-link link-dark"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                        Schedules
                        </a>
                    </li>
                    <li>
                        <a href="/admindash/viewbookings" className={location.pathname === "/admindash/viewbookings"? "nav-link active": "nav-link link-dark"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                        Bookings
                        </a>
                    </li>
                    <li>
                        <a href="/admindash/managetrips" className={location.pathname === "/admindash/managetrips"? "nav-link active": "nav-link link-dark"}>
                        <svg className="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                        Trips and Tours
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/admindash" className={location.pathname === "/admindash/managecustomers"? "nav-link active": "nav-link link-dark"} aria-current="page">
                        <svg className="bi me-2" width="16" height="16"><use href="#home"></use></svg>
                        Customers
                        </a>
                    </li>
                    </ul>
                    <hr/>
                    
                </div>
    )
}
