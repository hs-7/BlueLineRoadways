import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';

export default function Payment(props) {

    const history = new useHistory()

    const [UserData, setUserData] = useState({})
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };

    useEffect(async() => {
        const jc = parseJwt(localStorage.getItem("x-access-token"));
        const ud = await fetch("http://localhost:8080/api/users")
        const ud2 = await ud.json()
        const ud3 = ud2.users.find(item=> item._id==jc.id)
        setUserData(ud3)
}, [])

    const data = props.location.param1;
    console.log(data)
    const userCredential = {
        UserId: UserData.email,
        Despatcher: data.dep_place,
        Destination: data.des_place,
        Seats_SleeperNo: data.selected,
        PaymentType: "Card",
        TotalAmount: data.price,
        DateOfBooking: data.sch_date
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', localStorage.getItem("x-access-token"));
        
        const res = await fetch("http://localhost:8080/api/paymentgate", {
            method: "POST",
            headers: myHeaders,
            body:JSON.stringify(userCredential)
        });

        const status = res.status;
        const data = await res.json();
        console.log(data)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("Payment Unsuccessfull");
        }else{
            window.alert("Payment Successfull");
            history.push("/")
        }
    }

    return (
        <div className="container-fluid">
            <div className="card my-1">
                <div className="card-top border-bottom text-center"> <a href="/"> Back to Home</a> <span id="logo">BlueLineRoadways.com</span> </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <h5 className="card-header">Card Payment</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                                </div>
                                <form className="form" onSubmit={handleSubmit}> <span>Cardholder's name:</span> <input className="form-control mb-1" placeholder="Linda Williams"/> <span>Card Number:</span> <input className="form-control mb-1" placeholder="0125 6780 4567 9909"/>
                                    <div className="row mb-1">
                                        <div className="col-4"><span>Expiry date:</span> <input className="form-control d-inline" placeholder="YY/MM"/> </div>
                                        <div className="col-4"><span>CVV:</span> <input className="form-control d-inline" id="cvv"/> </div>
                                    </div> <input className="form-control mb-1" type="checkbox" id="save_card" className="align-left"/> <label for="save_card">Save card details to wallet</label>
                                    <div className="row mx-0"><button type="submit" className="btn btn-primary">Pay</button></div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                                <div className="card">
                                <h5 className="card-header">Booking Details</h5>
                                <div className="card-body">
                                    <p className="card-text">{data.bus_details}</p>
                                    <p className="card-text">From {data.dep_place}[{data.dep_time}] to {data.des_place}[{data.des_time}]</p>
                                    <p className="card-text">Total Duration: {data.total_time}</p>
                                    <p className="card-text">Selected Seats/Sleepers: {Array.from(data.selected).map((item, i)=>item+" | ")}</p>
                                    <p className="card-text">Selected Date: {data.sch_date}</p>
                                    <div className="col text-right"><b>Total to pay: $ {data.price*data.selected.length}</b></div>
                                </div>
                                </div>
                                <hr/>
                        </div>
                    </div>
                </div>
                <div> </div>
            </div>
               
        </div>
    )
}
