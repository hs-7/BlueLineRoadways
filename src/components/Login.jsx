import React, {useState} from 'react';
import LoginForm from './LoginForm';
import LoginHero from './LoginHero';
import { useHistory} from 'react-router-dom'

export default function Signin() {

    const history = new useHistory();

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    // handle submit handlet function

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userCredential = {
            email,
            password
        }

        const res = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(userCredential)
        });

        const status = res.status;
        const data = await res.json();
        console.log(data)

        if(status === 422||status === 400||status === 406||status === 500||!data){
            window.alert("Login Invalid");
        }else{
            window.alert("Login Successfull");
            localStorage.setItem("x-access-token", data.token);
            
            
              const jc = parseJwt(localStorage.getItem("x-access-token"));
              const ud = await fetch("http://localhost:8080/api/users")
              const ud2 = await ud.json()
              console.log(ud2)
              const ud3 = ud2.users.find(item=> item._id==jc.id)
              if(ud3?.type==="admin"){
               history.push("/admindash");
              }else{
               history.push("/");
              }
        }
    }

    return (
        <div>
            <div className="row container mx-auto">
                <div className="login-box">
                    <LoginHero/>
                    <LoginForm loginState={{handleSubmit, setPassword, setEmail}}/>
                </div>
            </div>
        </div>
    )
}
