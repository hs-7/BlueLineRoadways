import React, {useState, } from 'react';
import RegisterForm from './RegisterForm';
import LoginHero from './LoginHero';
import { useHistory } from 'react-router-dom'

function Register() {

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_pass, setConfirmPass] = useState("");

    // on form submit click handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = {
            username,
            email,
            password,
            confirm_pass
        }

        const res = await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newUser)
        });

        const status = await res.status;
        const data = await res.json();
        console.log(data)

        if(status === 422||status === 406||status === 500||!status){
            window.alert("Registration Invalid");
        }else{
            window.alert("Registration Successfull");
            history.push("/login");
        }
    }

    let registerData = {
        handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setConfirmPass
    }

    return (
        <div>
            <div className="row container mx-auto">
                <div className="login-box">
                    <LoginHero/>
                    <RegisterForm registerState={registerData} />
                </div>
            </div>
        </div>
    )
}

export default Register
