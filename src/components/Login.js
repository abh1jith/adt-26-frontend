import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function Login(){
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");


    return <div className='container'>
        
        <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}}></i>
          <span class="h1 fw-bold mb-0">Rate My Reads</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: '23rem'}}>

            <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="userEmail" class="form-control form-control-lg" onChange={(e) => setUserEmail(e.target.value)} />
              <label class="form-label" for="userEmail">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
              <label class="form-label" for="password">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button" onClick = { (e) => {
                e.preventDefault();
                axios.post("https://adt-26-backend.onrender.com/loginUser", { email: userEmail, password: password })
                    .then((response) => {
                    console.log(response.data);
                    alert(response.data.message);
                    navigate("/home", { state: { userEmail, userName: response.data.userName } })
                    })
                    .catch((error) => {
                        console.error("Error:", error.response.status);
                        if(error.response.status === 401) alert("Account is not found in the database. Please create one!"); 
                        navigate("/register");
                    });
               }}>Login</button>
            </div>

            <p>Don't have an account? <Link to="/register" class="link-info">Register here</Link></p>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
          alt="Cover" class="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
      </div>
    </div>
  </div>
</section>
    </div>
}
export default Login;