import React, { useState } from "react";
import { register, login } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

import '@fortawesome/fontawesome-free/css/all.min.css';

import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      if (dispatch(register(formData))) {
        dispatch(login(formData))
        navigate("/")
      }
    }
  };
  return (
    // <form onSubmit={onSubmit} className="return">
    //   <input
    //     type="text"
    //     name="name"
    //     value={name}
    //     onChange={onChange}
    //     placeholder="Name"
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     value={email}
    //     onChange={onChange}
    //     placeholder="Email"
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     value={password}
    //     onChange={onChange}
    //     placeholder="Password"
    //   />
    //   <input
    //     type="password"
    //     name="password2"
    //     value={password2}
    //     onChange={onChange}
    //     placeholder="Password 2"
    //   />
    //   <button type="submit">Register</button>
    // </form>
    <>
      <section className="return">
  <div className="">
    <section className=" w-100">
      <div className="row">
        <div className="col-12">
          <div className="card text-black" style={{ borderRadius: '25px' }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center text-body h1 fw-bold mb-5 mt-4">
                    Sign up
                  </p>

                  <form onSubmit={onSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas text-body fa-user fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                        data-mdb-input-initialized="true"
                      >
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
        value={name}
        onChange={onChange}
                        />
                        
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: '9px' }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: '71.2px' }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas text-body fa-envelope fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                        data-mdb-input-initialized="true"
                      >
                        <input
                          type="email"
                          id="form3Example3c"
                          className="form-control"
                          placeholder="Your Email"
                          name="email"
        value={email}
        onChange={onChange}
                        />
                        
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: '9px' }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: '68.8px' }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas text-body fa-lock fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                        data-mdb-input-initialized="true"
                      >
                        <input
                          type="password"
                          id="form3Example4c"
                          className="form-control"
                          placeholder="Password"
                          name="password"
        value={password}
        onChange={onChange}
                        />
                        
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: '9px' }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: '64.8px' }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas text-body fa-key fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                        data-mdb-input-initialized="true"
                      >
                        <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
                          placeholder="Repeat your password"
                          name="password2"
        value={password2}
        onChange={onChange}
                        />
                        
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: '9px' }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: '134.4px' }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-warning btn-lg"
                        data-mdb-button-initialized="true"
                        onClick={onSubmit}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
      </section>

    </>
  );
};
export default Register;
