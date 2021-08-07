import React from 'react'

export default function ViewBookings() {
    return (
        <div>
            <div className="BusGridList bg-light my-2 p-4">
            <h3>All Regervations</h3>
            <hr />
            <div class="card card-default bg-white p-2">
                <div class="card-header">All Regervations</div>
                        <table class="card-table table-borderless" Style="overflow-y: auto; overflow-x: auto;" >
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

                        <tr>
                        <th>
                            ggd
                        </th>
                        <td>
                            gdggd
                        </td>
                        <th>
                            hsh
                        </th>
                        <th>
                            hshs
                        </th>
                        <th>
                            shh
                        </th>
                        <td>
                        jsh
                        </td>
                        <td>
                        shhs
                        </td>
                        <td>
                            sjj
                        </td>

                    </tr>
                        </tbody>
                </table> 
            </div>
            </div>
        </div>
    )
}
