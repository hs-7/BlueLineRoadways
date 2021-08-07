import React from 'react'

export default function SearchBar() {
    return (
                <form class="HomeSrc" action="/routes">
                    <div class="form-group bg-white py-2 px-3 d-flex justify-content-between">
                        <input class="form-control srcInput" name="Despature" placeholder="From"></input>
                        <button className="fas fa-exchange-alt exSym"></button>
                        <input class="form-control srcInput" name="Destination" placeholder="To"></input>
                        <input type="date" class="btn btn-light dateInput" name="date"></input>
                        <input type="submit" value="Search" class="btn btn-primary rounded-0 float-right subInput"></input>
                    </div>
                </form>
    )
}
