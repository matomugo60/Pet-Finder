import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  
  const nav = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    nav("/");
  }

  return (
    <div className="container">
      <h1 className="text-center mb-4">Sign Up</h1>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            value={formData.firstname}
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div className="form-group mb-2 col-6 align-items-center">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group mb-4 col-md-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <center>
          <button type="submit" className="btn btn-primary mb-4">
             Submit<Link to="/pets">Submit</Link>
          </button>
        </center>

        <center>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">Login?</Link>
          </p>
        </center>
      </form>
    </div>
  );
}

export default Register;
