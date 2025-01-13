import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../features/auth/authSlice";


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  
  const onLogout = () => {
    dispatch(logout());
    navigate("/login")
  };

  return (
    <>
    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/"class="nav-link px-2 text-secondary">Home</Link></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>
        <div class="text-end">
          {
            !user?
            <>
            <button type="button" class="btn btn-outline-light me-2 linksButton"><Link to="/login" className='links' >Login</Link></button>
            <button type="button" class="btn btn-warning linksButton"><Link to="/register" className='links' id='linkRegister' >Sign-in</Link></button>
            </>
            :
            <>
            <Link to="/profile" className='userName'>{user.name}</Link>
            <button type="button" class="btn btn-danger btn-floating" data-mdb-ripple-init onClick={onLogout}>
            Logout
            </button>
            </>
          }
          {/*  */}
          
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header