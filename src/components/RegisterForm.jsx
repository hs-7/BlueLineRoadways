import React from 'react'

export default function RegisterationPortion(props) {

  let{
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setConfirmPass
  } = props.registerState  

    return (
      <div className="col-md-7 col-lg-6 login-section align-self-center">
        <form method="post" className="login-section" onSubmit={handleSubmit}>
            <div className="section-heading">
              <h3>Register Your Account</h3>
            </div>
            <div className="form-group mb-1">
              <input className="w-100 input-login" type="text" id="username" onChange={e=>setUsername(e.target.value)} placeholder="username"></input>
            </div>
            <div className="form-group mb-1">
              <input className="w-100 input-login" type="text" id="username" onChange={e=>setEmail(e.target.value)} placeholder="user email"></input>
            </div>
            <div className="form-group mb-1">
              <input className="w-100 input-login" type="text" id="username" onChange={e=>setPassword(e.target.value)} placeholder="password"></input>
            </div>
            <div className="form-group">
              <input className="w-100 input-login" type="password" id="password" onChange={e=>setConfirmPass(e.target.value)} placeholder="confirm password"></input>
            </div>
            <div className="form-group">
              <button className="btn btn-submit">Submit</button>
            </div>
        </form>
      </div>
    )
}
