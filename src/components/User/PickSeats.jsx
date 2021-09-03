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
                        <input id="Seat01" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat02" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat03" type="checkbox" onClick={(e)=>setSeat(e.target.id)} className="col-md-3 border border-dark my-1"></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat04" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat05" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat06" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat07" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat08" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat09" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat10" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat11" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat12" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat13" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat14" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat15" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat16" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat17" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat18" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat19" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat20" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat21" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat22" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat23" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat24" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat25" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat26" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat27" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                    </div>
                    <div className="seat-details col-md-3 row mx-0 align-items-center border border-dark justify-content-around mx-auto border bg-white m-1">
                        <input id="Seat28" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat29" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
                        <input id="Seat30" type="checkbox" className="col-md-3 border border-dark my-1" onClick={(e)=>setSeat(e.target.id)}></input>
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
