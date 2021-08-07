import React from 'react';
import SideBar from './SideBar';
import ManageBuses from './ManageBuses';
import ManageRoutes from './ManageRoutes';
import ManageStops from './ManageStops';
import ManageSchedules from './ManageSchedules';
import ViewBookings from './ViewBookings';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function AdminDash() {
    return (
        <div className="d-flex position-relative fluid-container">
            
            <div className="col-md-3 container p-2">
                <SideBar/>
            </div>
            <BrowserRouter>
            <>
            <div className="col-md-9 container p-2">
                <Switch>
                    <Route exact path="/admindash" component={null}></Route>
                    <Route path="/admindash/managebuses" component={ManageBuses}></Route>
                    <Route path="/admindash/managestops" component={ManageStops}></Route>
                    <Route path="/admindash/manageroutes" component={ManageRoutes}></Route>
                    <Route path="/admindash/manageschedules" component={ManageSchedules}></Route>
                    <Route path="/admindash/viewbookings" component={ViewBookings}></Route>
                </Switch>
            </div>
            </>
            </BrowserRouter>

            

            
            
        </div>
    )
}
