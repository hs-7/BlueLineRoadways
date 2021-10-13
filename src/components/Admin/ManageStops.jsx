import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

export default function ManageStops() {

    const [stopdata, setStopdata] = useState("");
    let i = 1;

    const bindStopdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/stopdata');
        const status = response.status;
        const data = await response.json();
        
        setStopdata(data.stops);
        console.log(data.stops)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get buses data unsuccessfully");
        }else{
        }
    }

    useEffect(() => {
        bindStopdata();
    }, [])


    const history = useHistory();

    const [stopname, setStopname] = useState("");
    const [stopcity, setStopcity] = useState("");
    const [stopstate, setStopstate] = useState("");
    const [stoppincode, setStoppincode] = useState("");

    // on form submit click handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newStop = {stopname,
            stopcity,
            stopstate,
            stoppincode}

        const res = await fetch("http://localhost:8080/api/register_stop", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newStop)
        });

        const status = await res.status;
        const data = await res.json();
        setStopdata([...stopdata, data])

        if(status === 422||status === 406||status === 500||!status){
            window.alert("Registration Invalid");
        }else{
        }
    }
    
    return (
        <>
            <div className="AddStopForm bg-light p-4">
                <form method="post" onSubmit={handleSubmit}>
                    <div class="form-group row justify-content-around align-items-around mb-2 wrap">
                        <div class="col-sm-10 mb-2">
                        <input type="input" min="0" class="form-control" id="inputPassword3" placeholder="Stop Name" onChange={e=>setStopname(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 mb-2">
                        <input type="input" min="0" class="form-control" id="inputPassword3" placeholder="Stop City" onChange={e=>setStopcity(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 mb-2">
                        <input type="input" min="0" class="form-control" id="inputPassword3" placeholder="Stop State" onChange={e=>setStopstate(e.target.value)}/>
                        </div>

                        <div class="col-sm-10 mb-2">
                        <input type="input" min="0" class="form-control" id="inputPassword3" placeholder="Stop Pincode" onChange={e=>setStoppincode(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 ">
                        <button type="submit" class="btn btn-primary rounded-0 mx-auto">Add Stop</button>
                        </div>
                    </div>
                    </form>
                </div>

                <div className="BusGridList bg-light my-2 p-4">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">PinCode</th>
                    <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>

                                {Array.from(stopdata).map((anObjectMapped, index) => {
                                    return (

                                        <tr key={`${anObjectMapped._id}`}>
                                        <th scope="row">{i++}</th>
                                        <td>{anObjectMapped.stopname}</td>
                                        <td>{anObjectMapped.stopcity}</td>
                                        <td>{anObjectMapped.stopstate}</td>
                                        <td>{anObjectMapped.stoppincode}</td>
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
