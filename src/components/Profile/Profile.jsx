import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.scss'


const Profile = () => {

const { user } = useSelector((state) => state.auth);

  return (
    <>
{console.log("usuario: ",user)
}
<div className="row py-5 px-4 return">
  <div className="col-md-5 mx-auto">
    <div className="bg-white shadow rounded overflow-hidden">
      <div className="px-4 pt-0 pb-4 cover">
        <div className="media align-items-end profile-head"> 
          <div className="profile mr-3">
            <img 
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
              alt="Profile" 
              width="130" 
              className="rounded mb-2 img-thumbnail" 
            />
            <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
          </div>
          <div className="media-body mb-5 text-white">
            <h4 className="mt-0 mb-0">{user.name}</h4>
            <p className="small mb-4">
              
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light p-4 d-flex justify-content-end text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block">215</h5>
            <small className="text-muted">
              Posts
            </small>
          </li>
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block"></h5>
            <small className="text-muted">
              
            </small>
          </li>
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block">340</h5>
            <small className="text-muted">
              Likes
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Profile