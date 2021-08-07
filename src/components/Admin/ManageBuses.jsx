import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

export default function ManageBuses() {

    const [busdata, setBusdata] = useState("");
    let i = 1;

    const bindBusdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/busdata');
        const status = response.status;
        const data = await response.json();
        setBusdata([...busdata, data])
        
        setBusdata(data.buses);
        console.log(data.buses)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get buses data unsuccessfully");
        }else{
            window.alert("get buses data successfully");
        }
    }

    useEffect(() => {
        bindBusdata();
    }, [])

    const history = useHistory();

    const [busnumber, setBusNumber] = useState("");
    const [noOfSts, setnoOfSts] = useState("");
    const [noOfsSlps, setnoOfsSlps] = useState("");
    const [noOfdSlps, setnoOfdSlps] = useState("");
    const [busFts, setBusFts] = useState("");
    const [busType, setBusType] = useState("");

    // on form submit click handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newBus = {
            busnumber,
            noOfSts,
            noOfsSlps,
            noOfdSlps,
            busFts,
            busType
        }

        const res = await fetch("http://localhost:8080/api/register_bus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newBus)
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
                <form method="post" onSubmit={handleSubmit}>
                    <div class="form-group row mb-2">
                        <label for="inputBN" class="col-sm-2 col-form-label fw-bold">Bus Number</label>
                        <div class="col-sm-10">
                        <input type="input" class="form-control" id="inputBN" placeholder="Bus Number" onChange={e=>setBusNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <div class="col-sm-10 col-md-4">
                        <input type="number" min="0" class="form-control" id="inputPassword3" placeholder="Available Seats" onChange={e=>setnoOfSts(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 col-md-4">
                        <input type="number" min="0" class="form-control" id="inputPassword3" placeholder="SingleSlipers" onChange={e=>setnoOfsSlps(e.target.value)}/>
                        </div>
                        
                        <div class="col-sm-10 col-md-4">
                        <input type="number" min="0" class="form-control" id="inputPassword3" placeholder="DoubleSlipers" onChange={e=>setnoOfdSlps(e.target.value)}/>
                        </div>
                    </div>
                    <fieldset class="form-group mb-2">
                        <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0 fw-bold">Features</legend>
                        <div class="col-sm-10 d-flex">
                            <div class="form-check me-2">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="AC" onChange={e=>setBusFts(e.target.value)}/>
                            <label class="form-check-label" for="gridRadios1">
                                AC
                            </label>
                            </div>
                            <div class="form-check me-2">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="NON-AC" onChange={e=>setBusFts(e.target.value)}/>
                            <label class="form-check-label" for="gridRadios2">
                                NON-AC
                            </label>
                            </div>
                        </div>
                        </div>
                    </fieldset>
                    <fieldset class="form-group row mb-2">
                        <div class="col-sm-2 fw-bold">Bus Type</div>
                        <div class="col-sm-10 d-flex flex-wrap">
                        <div class="form-check me-2">
                            <input class="form-check-input" type="radio" name="gridRadios1" id="gridCheck1" value="Tata Motors – Marcopolo" onChange={e=>setBusType(e.target.value)}/>
                            <label class="form-check-label" for="gridCheck1">
                            Tata Motors – Marcopolo
                            </label>
                        </div>
                        <div class="form-check me-2">
                            <input class="form-check-input" type="radio" id="gridCheck2" name="gridRadios1" value="Volvo Buses" onChange={e=>setBusType(e.target.value)}/>
                            <label class="form-check-label" for="gridCheck1">
                            Volvo Buses
                            </label>
                        </div>
                        <div class="form-check me-2">
                            <input class="form-check-input" type="radio" id="gridCheck3" name="gridRadios1" value="SML Isuzu" onChange={e=>setBusType(e.target.value)}/>
                            <label class="form-check-label" for="gridCheck1">
                            SML Isuzu
                            </label>
                        </div>
                        <div class="form-check me-2">
                            <input class="form-check-input" type="radio" id="gridCheck4" name="gridRadios1" value="BharatBenz" onChange={e=>setBusType(e.target.value)}/>
                            <label class="form-check-label" for="gridCheck1">
                            BharatBenz
                            </label>
                        </div>
                        <div class="form-check me-2">
                            <input class="form-check-input" type="radio" id="gridCheck5" name="gridRadios1" value="Mahindra & Mahindra – Comfio" onChange={e=>setBusType(e.target.value)}/>
                            <label class="form-check-label" for="gridCheck1">
                            Mahindra & Mahindra – Comfio
                            </label>
                        </div>
                        </div>
                    </fieldset>
                    <div class="form-group row mb-2">
                        <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary rounded-0">Add Bus</button>
                        </div>
                    </div>
                    </form>
                </div>

                <div className="BusGridList bg-light my-2 p-4">

                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">BusNum</th>
                    <th scope="col">Seats</th>
                    <th scope="col">SingleSliper</th>
                    <th scope="col">DoubleSliper</th>
                    <th scope="col">Feature</th>
                    <th scope="col">Type</th>
                    <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>

                                {Array.from(busdata).map((anObjectMapped, index) => {
                                    return (

                                        <tr key={`${anObjectMapped._id}`}>
                                        <th scope="row">{i++}</th>
                                        <td>{anObjectMapped.busnumber}</td>
                                        <td>{anObjectMapped.noOfSts}</td>
                                        <td>{anObjectMapped.noOfsSlps}</td>
                                        <td>{anObjectMapped.noOfdSlps}</td>
                                        <td>{anObjectMapped.busFts}</td>
                                        <td>{anObjectMapped.busType}</td>
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
