import React, {useState, useEffect} from 'react';

export default function Managecustomers() {
    const [customerdata, setcustomerdata] = useState("");
    let i = 1;

    const bindStopdata = async () =>{
        // event.preventDefault();

        const response = await fetch('http://localhost:8080/api/users');
        const status = response.status;
        const data = await response.json();
        
        setcustomerdata(data.users);

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
            <h3 className="h3 text-primary">All Registered Users</h3>
            <hr />
            <div class="card card-default bg-white p-2 overflow-auto small bookings">
                        <table class="card-table table table-hover" Style="overflow-y: auto; overflow-x: auto;" >
                    <thead>
                    <tr>
                        <th scope="col tableTitles">#User ID</th>
                        <th scope="col tableTitles">User Name</th>
                        <th scope="col tableTitles">User Email</th>
                        
                    </tr>
                    </thead>
                    <tbody>

                    {Array.from(customerdata).map((anObjectMapped, index) => {
                        return (
                        <tr key={`${anObjectMapped._id}`}>
                        <td>
                            {anObjectMapped._id}
                        </td>
                        <th>
                        {anObjectMapped.username}
                        </th>
                        <td>
                        {anObjectMapped.email}
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
