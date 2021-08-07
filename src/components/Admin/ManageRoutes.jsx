import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

export default function ManageRoutes() {

    const [routedata, setRoutedata] = useState("");
    let i = 1;

    const bindRoutedata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/routedata');
        const status = response.status;
        const data = await response.json();
        
        setRoutedata(data.routes);
        console.log(data.routes)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get buses data unsuccessfully");
        }else{
            window.alert("get buses data successfully");
        }
    }

    useEffect(() => {
        bindRoutedata();
    }, [])

    const history = useHistory();

    const [r_origin, setR_origin] = useState("");
    const [r_destination, setR_destination] = useState("");

    // on form submit click handler
    const handleRouteSubmit = async (event) => {
        event.preventDefault();

        const newRoute = {r_origin,
            r_destination}

        const res = await fetch("http://localhost:8080/api/register_route", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newRoute)
        });

        const status = await res.status;
        const data = await res.json();
        setRoutedata([...routedata, data])
        console.log(data)

        if(status === 422||status === 406||status === 500||!status){
            window.alert("Registration Invalid");
        }else{
            window.alert("Registration Successfull");
        }
    }

    return (
        <>
            <div className="AddRoutesForm bg-light p-4">
                <form method="post" onSubmit={handleRouteSubmit}>
                    <div class="form-group row justify-content-around align-items-around mb-2 wrap">
                        <div class="col-sm-10 mb-2">
                        <input type="input" min="0" class="form-control" id="routeorigin" placeholder="Route Origin" onChange={e=>setR_origin(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 mb-2">
                        <input type="input" min="0" class="form-control" id="routedestination" placeholder="Route Destination" onChange={e=>setR_destination(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 ">
                        <button type="submit" id="RouteSub" class="btn btn-primary rounded-0 mx-auto">Add Routes</button>
                        </div>
                    </div>
                    </form>
                </div>

                <div className="BusGridList bg-light my-2 p-4">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                                    {Array.from(routedata).map((anObjectMapped, index) => {
                                        return (

                                            <tr key={`${anObjectMapped._id}`}>
                                            <th scope="row">{i++}</th>
                                            <td>{anObjectMapped.r_origin}</td>
                                            <td>{anObjectMapped.r_destination}</td>
                                            <td>Edit</td>
                                            </tr>

                                        );
                                    })}                    

                        
                    </tbody>
                    </table>
                </div>
        </>
    )
}
