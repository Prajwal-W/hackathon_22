import React, { useState } from "react";
import { redirect } from "react-router-dom";
import dashboard from "../dashboard";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirectTo,setRedirectTo] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var token1;
        console.log(email);
        await fetch("http://localhost:3000/api/user/signin", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
           
            redirect: 'follow'
        })
        // .then((response)=>{
        //     if(response.ok)
        //     {
        //         return redirect("/dashboard") 
        //     }
        // })
        // .then(response => response.text())
        .then((result) => {
            console.log(result)
            token1= result.token;
            if(result.ok){
                debugger
                setRedirectTo(true);
                return (redirect("/dashboard") )
            }
           
           console.log(token1);
           localStorage.setItem("Data", JSON.stringify(token1))
          
            
          
        })
        .catch(error => console.log('error', error));

    }

// if(redirectTo)
// {
//     return (redirect("/dashboard") )
// }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}