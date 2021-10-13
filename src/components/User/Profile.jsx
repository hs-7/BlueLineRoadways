import React, { useEffect, useState } from 'react'

export default function Profile() {
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
    return (
        <div className="row m-0">
                <div className="container col-md-5 bg-light display-flex ">
                <form className="h-100">
                    <div className="form-row align-items-center p-4">
                        <div className="col-sm-12 my-2">
                        <label className="sr-only" for="inlineFormInputName">Name</label>
                        <input type="text" className="form-control" id="inlineFormInputName" value={UserData.username} placeholder="user name"/>
                        </div>
                        <div className="col-sm-12 my-2">
                        <label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" value={UserData.email} placeholder="email"/>
                        </div>
                        </div>
                        <div className="col-auto my-1">
                        <button type="submit" className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="container col-md-7 bg-light ">
                    
                </div>
        </div>
    )
}
