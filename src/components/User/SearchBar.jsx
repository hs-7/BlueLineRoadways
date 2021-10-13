import React, {useState, useRef, useEffect} from 'react'
const {format} = require('date-fns');

export default function SearchBar(props) {
    const [ss, setss] = useState([])
    console.log(ss);
    const [secDt, setsecDt] = useState(format(new Date(), 'yyyy-MM-dd').toString())
    const oriRef = useRef();
    const desRef = useRef();
    if(props.origin&&props.destination){
        oriRef.current.value = props.origin;
        desRef.current.value = props.destination;
    }

    useEffect(async() => {
        const res = await fetch("http://localhost:8080/api/routedata")

        const status = await res.status;
        const data = await res.json();
        setss(data.routes)
    }, [])

    
    return (
        <form class="HomeSrc" action="/routes">
            <div class="form-group bg-white py-2 px-3 d-flex justify-content-between">
                <input ref={oriRef} autocomplete="off" list="browsers" class="form-control srcInput" name="Despature" placeholder="From" required></input>
                <datalist id="browsers">
                    {ss.map(item=><option value={item.r_origin}/>)}
                </datalist>
                <button className="fas fa-exchange-alt exSym"></button>
                <input ref={desRef} list="browsers1" autocomplete="off" class="form-control srcInput" name="Destination" placeholder="To" required></input>
                <datalist id="browsers1">
                    {ss.map(item=><option value={item.r_destination}/>)}
                </datalist>
                
                <input type="date" class="btn btn-light dateInput" name="date" min={format(new Date(), 'yyyy-MM-dd').toString()} value={secDt} onChange={(e)=>{setsecDt(e.target.value)}} required></input>
                <input type="submit" value="Search" class="btn btn-primary rounded-0 float-right subInput"></input>
            </div>
        </form>     
    )
}
