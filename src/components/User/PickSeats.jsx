import React from 'react'

export default function PickSeats(props) {

    const data = props.location.param1;
    console.log(data);

//     bus_details: "Rj22543SD | BharatBenz | NON-AC"
// dep_place: "sukadiya cir, udaipur"
// dep_time: "3:23 AM"
// depdes_obid: "610bb6943210361c7048f50d,610c1e40e2f56c43840af8e2"
// des_place: "Subhas bridge, Ahemadabad"
// des_time: "10:53 PM"
// price: 6
// sch_date: "08/10"
// total_time: "19:30hr"


    return (
        <div className="d-flex mx-0 viewseats-section my-1">
            <div className="col-md-7 mb-2">
                <div className="bus-proto bg-light p-4 m-1 h-100">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, hic et? Dolorem obcaecati optio voluptate sint, sapiente tenetur autem beatae quaerat eos? Incidunt, commodi quidem expedita sint alias porro repellat laudantium, ipsam nemo illum, magnam autem corrupti! Quod magni, voluptas dolorum amet corrupti, sit sapiente alias saepe iusto aperiam assumenda provident ut, illum dolorem recusandae.</p>
                </div>
            </div>
            <div className="col-md-5 mb-2">
                <div className="checkout-details bg-light p-4 m-1">
                <div class="card">
                <h5 class="card-header">Checkout Details</h5>
                <div class="card-body">
                    <p class="card-text">Selected Seats/Sleepers:</p>
                    <p class="card-text">Total Price: {data.price}</p>
                    <a href="#" class="btn btn-primary">Checkout</a>
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
