
import './App.css';
import { Login } from './components/loginpage/login';
import { Register } from './components/loginpage/register';
import { useState } from 'react';
import {  Routes } from "react-router-dom";
import React from 'react';
import { Dashboard } from './components/dashboard';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      
     
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element=
        {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }/>
        
        
        <Route exact path="/dashboard" component={Dashboard}/> 
        <Route onFormSwitch={toggleForm}  exact path="/login" component={Login}/>
        <Route onFormSwitch={toggleForm}  exact path="/register" component={Register}/>
          
       
        </Routes>
        </BrowserRouter>

       
      
    </div>
  );
}

export default App;
