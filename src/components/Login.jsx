import React, { useRef, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { UserActions } from '../store/activeUserSlice';

const LoginPage = () => {

    const navigate = useNavigate();
  const dispatch=useDispatch();
  const emailElement= useRef();
  const passwordElement=useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/login",{
        userEmail:emailElement.current.value,
        userPassword:passwordElement.current.value
      })
      .then((response)=>{
        if(response.data==="User not found"){
          alert("User not found");
        } else if(response.data==="Invalid Credentials"){
            alert("Please enter the correct password")
        } else {
          dispatch(UserActions.setActiveUser(response.data))
          navigate("/");
        }
      })
      .catch((error)=>{
        console.log(error)
      })
   
  };

  return (
    
      <div className='loginForm'>
        <div className='formContainer'>
        <form onSubmit={handleLogin} className='formElement'> 
          <h2>Login</h2>
          <label>Email:</label>
          <input type="email" ref={emailElement}  />
          <label>Password:</label>
          <input type="password" ref={passwordElement} />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
        </div>
      </div>
    
  );
};


export default LoginPage;
