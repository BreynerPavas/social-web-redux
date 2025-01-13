import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img from '../../assets/add-photo.png';

const Footer = () => {

    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)
    
    
  return (
    user?<>
    <span className="spanIcon bounce postIcon " onClick={()=>{
        navigate("/addPost")
    }}>
  <img src={img} alt="" srcset="" className='imgAdd'/>
</span>
    </>:
    <></>
    
  )
}

export default Footer