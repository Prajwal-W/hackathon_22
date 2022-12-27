import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import { Redirect } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [role, setRole] = useState('');
  

    const handleSubmit = async (e) => {
        var token1;
        e.preventDefault();
        console.log(email);
        await fetch("http://localhost:8080/api/user/signup", {
            method: 'POST',
            headers:{
              
                "Content-Type": "application/json"
          
           
        },
            body: JSON.stringify({"Name": name,
            "Role": role,
            "Email": email,
            "Password":pass }),
            redirect: 'follow'
          })
         
          .then(response => response.json())
          .then((result) => {
            token1= result.token;
            console.log(result);
          
           console.log(token1);
           localStorage.setItem("Data", JSON.stringify(token1));

        })
         
        
    }

    const loginFunction =() =>{

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

            <label htmlFor="number">Mobile Number</label>
            <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} id="mobileno" placeholder="mobile number" />

            <label htmlFor="name">Designation</label>
            <input value={role} onChange={(e) => setRole(e.target.value)} id="role" placeholder="Role" />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}