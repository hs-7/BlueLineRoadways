import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

export default function ManageSchedules() {

    const [busdata, setBusdata] = useState("");
    const [stopdata, setStopdata] = useState("");
    const [routedata, setRoutedata] = useState("");

    const [scheduledata, setSchdata] = useState("");
    let i = 1;

    const bindSchdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/scheduledata');
        const status = response.status;
        const data = await response.json();
        
        setSchdata(data.schedules);
        console.log(data.schedules)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get buses data unsuccessfully");
        }else{
            window.alert("get buses data successfully");
        }
    }

    
    const bindBusdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/busdata');
        const status = response.status;
        const data = await response.json();
        
        setBusdata(data.buses);
        console.log(data.buses)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get buses data unsuccessfully");
        }else{
            window.alert("get buses data successfully");
        }
    }

    const bindRoutedata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/routedata');
        const status = response.status;
        const data = await response.json();
        
        setRoutedata(data.routes);
        console.log(data.routes)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get routes data unsuccessfully");
        }else{
            window.alert("get routes data successfully");
        }
    }

    const bindStopdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/stopdata');
        const status = response.status;
        const data = await response.json();
        
        setStopdata(data.stops);
        console.log(data.stops)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get stops data unsuccessfully");
        }else{
            window.alert("get stops data successfully");
        }
    }

    useEffect(() => {
        bindBusdata();
        bindRoutedata();
        bindStopdata();
        bindSchdata();
    }, [])

    const [formValues, setFormValues] = useState([{ name: "", email : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    // let handlesSubmit = (event) => {
    //     event.preventDefault();
    //     alert(JSON.stringify(formValues));
    // }

    const [sch_data, setSch_data] = useState("")

    const [s_busnum, sets_busno] = useState("")
    const [s_routeid, sets_routeid] = useState("")

    const [s_stopid, sets_stopid] = useState("")
    const [s_arrtime, sets_arrtime] = useState("")
    const [s_arrpri, sets_arrpri] = useState("")



    const history = useHistory();

    const [busnumber, setBusNumber] = useState("");
    const [noOfSts, setnoOfSts] = useState("");
    const [noOfsSlps, setnoOfsSlps] = useState("");
    const [noOfdSlps, setnoOfdSlps] = useState("");
    const [busFts, setBusFts] = useState("");
    const [busType, setBusType] = useState("");

    const setSch = (data) => {
        const a = [...sch_data];
        a.push(data);
        setSch_data(a);
        console.log(sch_data);
    }

    // on form submit click handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newSchedule = {
            schedulebus:s_busnum,
            scheduleroute:s_routeid,
            schedulestop:[{
                stopid: s_stopid,
                arrivaltime: s_arrtime,
                arrivalPrice: s_arrpri
              }]
        }

        const res = await fetch("http://localhost:8080/api/register_schedule", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newSchedule)
        });

        const status = await res.status;
        const data = await res.json();
        console.log(data)

        if(status === 422||status === 406||status === 500||!status){
            window.alert("Registration Invalid");
        }else{
            window.alert("Registration Successfull");
        }
    }


    return (
        <>
        <div className="AddBusesForm bg-light p-4">
        <form  onSubmit={handleSubmit}>
                    <div className="form-group d-flex mb-2">
                        <label for="inputBN" className="col-sm-2 col-form-label fw-bold">Bus Number</label>
                        <div class="dropdown col-md-4">
                            <button class="form-control dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {(!s_busnum)?"Select Bus":s_busnum}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                
                                {Array.from(busdata).map((anObjectMapped, index) => {
                                    return (
                                        <li><button key={`${anObjectMapped._id}`} className="dropdown-item" onClick={()=>sets_busno(`${anObjectMapped.busnumber}`)}>{anObjectMapped.busnumber} - {anObjectMapped.busType}</button></li>
                                    );
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="form-group d-flex mb-2">
                        <label for="inputBN" className="col-sm-2 col-form-label fw-bold">Route Id</label>
                        <div class="dropdown col-md-4">
                            <button class="form-control dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {(!s_routeid)?"Select Route":s_routeid}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                
                                {Array.from(routedata).map((anObjectMapped, index) => {
                                    return (
                                        <li><button key={`${anObjectMapped._id}`} className="dropdown-item" onClick={()=>sets_routeid(`${anObjectMapped._id}`)}>{anObjectMapped.r_origin} - {anObjectMapped.r_destination}</button></li>
                                    );
                                })}

                            </ul>
                        </div>
                    </div>

                    <div className="form-group border py-1 row mb-2">
                        <div class="dropdown col-md-3">
                            <button class="form-control dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {(!s_stopid)?"Select Stop":s_stopid}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                {Array.from(stopdata).map((anObjectMapped, index) => {
                                    return (
                                        <li><button key={`${anObjectMapped._id}`} className="dropdown-item" onClick={()=>sets_stopid(`${anObjectMapped._id}`)}>{anObjectMapped.stopname} - {anObjectMapped.stopcity}</button></li>
                                    );
                                })}

                                <li><button class="dropdown-item" onClick={()=>sets_stopid("Action")}>Action</button></li>
                                <li><button class="dropdown-item" >Another action</button></li>
                                <li><button class="dropdown-item" >Something else here</button></li>
                            </ul>
                        </div>
                        
                        <div className="col-sm-10 col-md-3">
                        <input type="time" id="appt" name="appt" min="0" className="form-control" id="inputPassword3" placeholder="Arrival Time" onChange={e=>sets_arrtime(e.target.value)}/>
                        </div>
                        
                        <div className="col-sm-10 col-md-3">
                        <input type="number" min="0" className="form-control" id="inputPassword3" placeholder="Arrival Price" onChange={e=>sets_arrpri(e.target.value)}/>
                        </div>

                        <button type="button"  className="btn btn-info col-md-3 rounded-0 remove" onClick={()=>{setSch({s_stopid,s_arrtime,s_arrpri}); console.log(sch_data)}}>add stop</button> 
                
                    </div>
                
                <div className="p-1 border border-dark mb-2">
                    <div className="border p-1 d-flex form-group">
                                <ol  className="col-md-12">
                                {Array.from(sch_data).map((anObjectMapped, index) => {
                                    return (
                                        <li key={`${anObjectMapped._id}`} className="border-bottom">

                                            <div className="btn col-md-3">{anObjectMapped.s_stopid}</div>
                                            <div className="btn col-md-3">{anObjectMapped.s_arrtime}</div>
                                            <div className="btn col-md-3">{anObjectMapped.s_arrpri}</div>
                                            <button type="button"  className="btn btn-danger col-md-3 rounded-0 remove" >remove</button>

                                        </li>
                                    );
                                })}
                                </ol>
                    </div>
                </div>   

         
          <div className="form-group row mb-2">
            <div className="col-sm-10">
              <button className="btn btn-primary rounded-0 m-2 submit" type="submit">Add Schedule</button>
              </div>
          </div>
       </form>

        </div>

                <div className="BusGridList bg-light my-2 p-4">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Route</th>
                    <th scope="col">BusNum</th>
                    <th scope="col">Stops</th>
                    <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>

                                {Array.from(scheduledata).map((anObjectMapped, index) => {
                                    return (

                                        <tr key={`${anObjectMapped._id}`}>
                                        <th scope="row">{i++}</th>
                                        <td>{anObjectMapped.scheduleroute}</td>
                                        <td>{anObjectMapped.schedulebus}</td>
                                        <td>{anObjectMapped.schedulestop[0].arrivaltime}</td>
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
