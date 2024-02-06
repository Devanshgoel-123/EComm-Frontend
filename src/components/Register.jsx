import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
    const userNameElement=useRef();
    const userEmailElement=useRef();
    const userPasswordElement=useRef();
    const userPhoneElement=useRef();

    const handleRegister = (e) => {
      e.preventDefault();
 
      const userName=userNameElement.current.value;
      const userEmail=userEmailElement.current.value;
      const userPassword=userPasswordElement.current.value;
      const userPhone=userPhoneElement.current.value;

      axios.post("http://localhost:3000/register",{
          name:userName,
          email:userEmail,
          password:userPassword,
          phone:userPhone
      })
      .then((response)=>{
        console.log(response.data)
        if(response.data==="Email is already Used"){
          alert(response.data)
        }else if(response.data==="Done the registration"){
          alert(response.data)
        }
     })
     .catch((error)=>{
       console.log(error)
     })
    };
  
    return (
      <div className="registerForm">
        <div className="formContainer">
          <form onSubmit={handleRegister} className="formElement">
            <h2>Register</h2>
            <label>Name:</label>
            <input type="text" ref={userNameElement} required />
            <label>Email:</label>
            <input type="email" ref={userEmailElement} required />
            <label>Password:</label>
            <input type="password" ref={userPasswordElement} required />
            <label>Mobile :</label>
            <input type="password" ref={userPhoneElement} required />
            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    );
  };

  export default RegisterPage;