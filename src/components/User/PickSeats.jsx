import React, {useState} from 'react';
import {Link} from 'react-router-dom'


export default function PickSeats(props) {

    const data = props.location.param1;
    console.log(data);

    const [chkseats, setchkseats] = useState([])


    const setSeat = (newId) =>{
        if(!chkseats.includes(newId)){          //checking weather array contain the id
            let arr=[...chkseats];
            arr.push(newId);               //adding to array because value doesnt exists
            setchkseats(arr)
        }else{
            let arr = [...chkseats];
            arr.splice(chkseats.indexOf(newId), 1);  //deleting
            setchkseats(arr)
        }
    }

    console.log(chkseats);

    return (
        <div className="d-flex mx-0 viewseats-section my-1">
            <div className="col-md-7 mb-2 bg-light p-4 m-1">
                <div className="SeatsPattern">
                    <div className="seat-details col-md-3 row mx-0 align-items-center border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat01" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input><input id="cbS2" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input><input id="cbS3" type="checkbox" onClick={(e)=>setSeat(e.target.id)} className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="cbS4" type="checkbox" className="col-md-3 border border-dark my-1"></input><input id="cbS5" type="checkbox" className="col-md-3 border border-dark my-1"></input><input id="cbS6" type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="cbS7" type="checkbox" className="col-md-3 border border-dark my-1"></input><input id="cbS8" type="checkbox" className="col-md-3 border border-dark my-1"></input><input id="cbS9" type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="cbS10" type="checkbox" className="col-md-3 border border-dark my-1"></input><input id="cbS11" type="checkbox" className="col-md-3 border border-dark my-1"></input><input id="cbS12" type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input><input type="checkbox" className="col-md-3 border border-dark my-1"></input>
                    </div>
                </div>
            </div>
            <div className="col-md-5 mb-2">
                <div className="checkout-details bg-light p-4 m-1">
                <div class="card">
                <h5 class="card-header">Checkout Details</h5>
                <div class="card-body">
                    <p class="card-text">Selected Seats/Sleepers: {chkseats.map((item, i)=>item+" | ")}</p>
                    <p class="card-text">Total Price: {data.price*chkseats.length}</p>
                    <Link className="btn btn-primary rounded-0" to={ { pathname: "/payment", param1: {...data, selected: chkseats} }}>Checkout</Link>
                </div>
                </div>
                </div>

                <div className="checkout-details bg-light p-4 m-1">
                <div class="card">
                <h5 class="card-header">Bus Details</h5>
                <div class="card-body">
                    <p class="card-text">{data.bus_details}</p>
                    <p class="card-text">From {data.dep_place}[{data.dep_time}] to {data.des_place}[{data.des_time}]</p>
                    <p class="card-text">Total Duration: {data.total_time}</p>
                    <p class="card-text">Selected Date: {data.sch_date}</p>
                    <p class="card-text">Min Price: {data.price}</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
