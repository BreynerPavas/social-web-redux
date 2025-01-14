import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchName } from "../../features/auth/authSlice";
import { Link, useParams } from 'react-router-dom';
import './Search.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const Search = () => {
    const dispatch = useDispatch();
    const userName = useParams("name");
    const { users } = useSelector((state) => state.auth); 
    useEffect(() => {
		dispatch((searchName(userName.name)));
        
	}, [userName.name]);
  return (
    <div className='return'>
         <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          {/* Section Heading */}
          <div
            className="section_heading text-center wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Single Advisor */}
        
        {
        users.map((user)=>{
            return(
            <>
           <div className="col-12 col-sm-6 col-lg-3">
          <div
            className="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            {/* Team Thumb */}
            <div className="advisor_thumb">
            <Link to={"/profile/"+user._id}>

              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              </Link>
            </div>
            {/* Team Details */}
            <div className="single_advisor_details_info d-flex justify-content-center">
                <Link to={"/profile/"+user._id}>
              <h6 className='py-1'>{user.name}</h6>
              </Link>
            </div>
          </div>
        </div>
            </>
            )
        })
    }
        
      </div>
    </div>
    
    </div>
    
    
  )
}

export default Search