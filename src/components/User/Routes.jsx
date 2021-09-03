import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import RouteListItem from './RouteListItem';
import { useHistory } from 'react-router-dom'

export default function Routes(props) {

    const viewseat = props.viewseat;

    const [busSch, setbusSch] = useState()
    
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    const history = useHistory();

    function processUser()
    {
        let parameters = history.location.search.substring(1).split("&");

        let temp = parameters[0].split("=");
        let l = unescape(temp[1]);
        temp = parameters[1].split("=");
        let p = unescape(temp[1]);
        setOrigin(l);
        setDestination(p);
    }


    let url_string = window.location.href;
    let url = new URL(url_string);
    let qp1 = url.searchParams.get("Despature");
    let qp2 = url.searchParams.get("Destination");
    let qp3 = url.searchParams.get("date");

    const bindBusSchedules = async () => {
        const newSchedule = {
            "origin": qp1,
            "destination": qp2,
            "date": qp3
        }
        const res = await fetch("http://localhost:8080/api/findschedules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newSchedule)
        });

        const status = await res.status;
        const data = await res.json();
        setbusSch(data);

        if(status === 422||status === 406||status === 500||!status){
            console.log("didnt get bus data");
        }else{
            console.log("get bus data Successfull");
        }
    }

    useEffect(() => {processUser();bindBusSchedules()}, [])

    return (
        <>
            <SearchBar/>
            <div className="routeList-section row mx-0 my-2">
                {!busSch?<div className="bg-light p-4"><span>loading</span></div>:<><Filter/><div className="col-md-9 p-1"><RouteListItem viewseat={viewseat} props={{busSch}}/></div></>}     
            </div>
        </>
    )
}
