import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
import LoginForm from './LoginForm';
import LoginHero from './LoginHero';
import { useHistory} from 'react-router-dom'

export default function Signin() {

    const history = new useHistory();

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
            history.push("/");
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
