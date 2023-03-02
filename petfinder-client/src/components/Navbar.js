import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar bg-secondary'>
    <div className='container-fluid'>
    <ul className='d-flex'>
      <li className='nav-item me-4'>
        <button className="btn btn-link">
        <Link className='text-dark nav-link col px-md-5' to="/">Pets</Link>
        </button>
      </li>
      <li className="nav-item me-4">
        <button className="btn btn-link">
        <Link className='text-dark nav-link col px-md-5' to="/your-pets">Your Pets</Link>
        </button>
      </li>
      <li className="nav-item me-4">
        <button className="btn btn-link">
          <Link className='text-dark nav-link col px-md-5' to="/login">Log In</Link>
          </button>
      </li>
      <li className="nav-item me-4">
        <button className="btn btn-link">
          <Link className='text-dark nav-link col px-md-5' to="/signup">Register</Link>
          </button>
      </li>
    </ul>
    </div>
  </nav>
  );
}

export default Navbar;
