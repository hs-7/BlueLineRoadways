import React from 'react';
import {Link} from 'react-router-dom'

export default function RouteListItem(props) {

    let{busSch}=props.props;

    const BusList = busSch.map((anObjectMapped, index) => {
        return (
            <div className="RouteListItem" key={anObjectMapped.depdes_obid}>
                <div className="d-flex justify-content-center mx-0 heading">
                    <div className="listItem fs-5 fw-bold px-3 py-3">{anObjectMapped.dep_time}</div>
                    <div className="listItem fs-6 px-3 py-3">{anObjectMapped.dep_place}</div>
                    <div className="listItem fs-5 fw-bold px-3 py-3">{anObjectMapped.des_time}</div>
                    <div className="listItem fs-6 px-3 py-3">{anObjectMapped.des_place}</div>
                    <div className="listItem px-3 py-3">{anObjectMapped.total_time}</div>
                </div>
                <div className="row mx-0 Details">
                    <div className="col-md-6 px-3 py-3">{anObjectMapped.bus_details}</div>
                    <div className="col-md-2 px-3 py-3 fs-5 fw-light">{anObjectMapped.sch_date}</div>
                    <div className="col-md-2 px-3 py-3">{anObjectMapped.price}</div>
                    <div className="col-md-2 px-3 py-3"><Link className="btn btn-primary rounded-0" to={ { pathname: "/viewseats/595212758daa6810cbba4104", param1: {...anObjectMapped} }}>view Seats</Link></div>
                </div>
            </div>
        );
    }) 

    return (
        <>
           {BusList}                           
        </>
    )
}
