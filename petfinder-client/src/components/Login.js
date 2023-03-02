import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Login() {
 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  let nav = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
        
        nav("/");
      
    }

    const backgroundStyle = {
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZwg9ojutvztDmCfKCzcEi860Kf64SRPKlw&usqp=CAU",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh"
    };

  return (
    <div style={backgroundStyle}>
    <div className="container">
    <h1 className="text-center mb-4">Login</h1>
    
    <form onSubmit={handleSubmit} >
      <div className="row justify-content-center">
      <div className="form-group mb-2 col-md-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          className="form-control"
          onChange={handleChange}
          value={formData.email}
        />
        </div>
      </div>
      <div className="row justify-content-center">
      <div className="form-group mb-4 col-md-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="form-control"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      </div>
      <center><button type="submit" className="btn btn-primary mb-4">Submit</button></center>
 
       <center>
      <p className="forgot-password text-right">
        Haven't Registered? <Link to="/signup">Sign up here</Link>
      </p>
      </center>
    </form>
  </div>
  </div>
     
  );
}

export default Login;