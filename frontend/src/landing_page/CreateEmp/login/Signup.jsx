import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();   
  
      axios.post("http://localhost:3000/signup", { name, email, password })
      .then(result => {
          console.log(result);
          navigate("/login"); // Ensure you call navigate inside the `.then()`
      })
      .catch(error => {
          console.error("Error during signup:", error.message);
          // Handle the error properly here, maybe show an alert to the user
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          </form>
          <p>Already have an Account ?</p>
          <Link to="/login"><button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </button>
          </Link>
       
      </div>
    </div>
  );
};

export default Signup;
