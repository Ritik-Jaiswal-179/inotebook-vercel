import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  const handlesummit = async (e) => {
    e.preventDefault()
    const { name, email, password } = credentials
    const response = await fetch(`${window.location.origin}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {

      localStorage.setItem("token", json.authToken)
      navigate("/")
      props.showalert("Account created successfully", "success")
    }
    else {
      // alert(" Invalid credentials")
      props.showalert("Email credentials already exists", "danger")
    }

  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container my-3'>
      <h2>SignUp to use iNotebook</h2>
      {/* <form onSubmit={handlesummit} className='container'>
        <div className="form-group">
          <label htmlFor="name">Email address</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onchange} aria-describedby="emailHelp" placeholder="Enter Name" />

        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onchange} aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onchange} placeholder="Password" minLength={5} required />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} placeholder="Password" minLength={5} required />
        </div>
        <button disabled={credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
      </form> */}

      <form onSubmit={handlesummit} className='container'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onchange} placeholder="Enter Name" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address: </label>
          <input type="email" className="form-control" id="email" name="email" onChange={onchange} placeholder="Enter email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password: </label>
          <input type="password" className="form-control" id="password" name="password" onChange={onchange} placeholder="Password" minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label"> Confirm Password: </label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} placeholder="Password" minLength={5} required/>
        </div>
        <button disabled={credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup