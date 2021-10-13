import React, {useState, useEffect} from 'react'

export default function ViewBookings() {

    const [bookdata, setStopdata] = useState("");
    let i = 1;

    const bindStopdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/bookings');
        const status = response.status;
        const data = await response.json();
        
        setStopdata(data.bookings);
        console.log(data.bookings)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("get buses data unsuccessfully");
        }else{
        }
    }

    useEffect(() => {
        bindStopdata();
    }, [])


    return (
        <div>
            <div className="BusGridList bg-light my-2 p-4">
            <h3 className="h3 text-primary">All Bookings and Regervations</h3>
            <hr />
            <div class="card card-default bg-white p-2 overflow-auto small bookings">
                        <table class="card-table table table-hover" Style="overflow-y: auto; overflow-x: auto;" >
                    <thead>
                    <tr>
                        <th scope="col tableTitles">#BookingID</th>
                        <th scope="col tableTitles">UserName</th>
                        <th scope="col tableTitles">Despatcher</th>
                        <th scope="col tableTitles">Destination</th>
                        <th scope="col tableTitles">Seats/SleeperNo</th>
                        <th scope="col tableTitles">PaymentType</th>
                        <th scope="col tableTitles">TotalAmount</th>
                        <th scope="col tableTitles">DateOfBooking</th>
                    </tr>
                    </thead>
                    <tbody>

                    {Array.from(bookdata).map((anObjectMapped, index) => {
                        return (
                        <tr key={`${anObjectMapped._id}`}>
                        <th>
                            {anObjectMapped._id}
                        </th>
                        <td>
                        {anObjectMapped.UserId}
                        </td>
                        <th>
                        {anObjectMapped.Despatcher}
                        </th>
                        <th>
                        {anObjectMapped.Destination}
                        </th>
                        <th>
                        {anObjectMapped.Seats_SleeperNo}
                        </th>
                        <td>
                        {anObjectMapped.PaymentType}
                        </td>
                        <td>
                        {anObjectMapped.TotalAmount}
                        </td>
                        <td>
                        {anObjectMapped.DateOfBooking}
                        </td>

                        </tr>
                        );
                    })}   
                        </tbody>
                </table> 
            </div>
            </div>
        </div>
    )
}
