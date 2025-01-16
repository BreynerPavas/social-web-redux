import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from '../../assets/meme.webp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.scss'
import { Link, useParams } from "react-router-dom";
import { getUserPost , like, unlike} from "../../features/post/postSlice";


const Profile = () => {

const { user } = useSelector((state) => state.auth);

const { userPost } = useSelector((state) => state.post); // primero lo que quiero y segundo de donde vienen



const userID = useParams("id");
console.log(userID.id); // este es el id del usuario mostrado
let likes = 0;

const dispatch = useDispatch();
	useEffect(() => {
    window.scrollTo(
      0,
      0
    );
		dispatch(getUserPost(userID.id));
    
	}, []);


  return (
    <>
    
    
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
            <h4 className="mt-0 mb-0">{userPost[userPost.length-1]?.userId.name}</h4>
            <p className="small mb-4">
              
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light p-4 d-flex justify-content-end text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block">{userPost.length}</h5>
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
            <h5 className="font-weight-bold mb-0 d-block">{

              userPost.map((post)=>{
                
                console.log("likes de la publicacion: "+post.likes.length);
                likes+= post.likes?.length;
                console.log("likes obtenidos: "+likes);
                
                
              })
              
              }
              {likes}
              </h5>
            <small className="text-muted">
              Likes
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
{
//aqui mostramos los posts del usuario userPost
  userPost.map((post)=>{

    const isAlreadyLiked = post.likes?.includes(user._id);

    return (
      <>
      <section class="hero">
            <div class="container">
             <div class="row">	
             
              <div class="col-lg-6 offset-lg-3">
               
               <div class="cardbox shadow-lg bg-white">
              
              <div class="cardbox-heading">
               
              <div class="m-0">
               
              <div class="media-body d-flex postHeader">
                <Link to={"/profile/"+post.userId._id}>
                <img src={img} alt="" width={"30px"} className='userImg' />
                </Link>
                {
                post.userId? <p className='m-0'>{post.userId.name}</p> :<p className='m-0'>Not user linked</p> 
                }
                
                 
                 
                </div>
                <p className='mx-4'> {post.body}	
                </p>
               </div>
              </div>
               
              <div class="cardbox-item">
                <Link to={"/postDetail/"+post._id}>
               <img class="img-fluid" src={img} alt="Image"/>
               </Link>
              </div>
              <div class="cardbox-base">
               
               <ul className='d-flex align-items-center'>
                <div className="mt-2">
                          {user ? (
                            <>
                                {isAlreadyLiked ? (
                          <div  className='likeButton'  onClick={()=> dispatch(unlike(post._id))  }>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                
                          </div>
                      
                        ) : (
                      <div onClick={()=> dispatch(like(post._id))  } className='likeButton'>
                
                      <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                      </svg>
                      </div>
                        )}
                
                            </>
                            ) : null}
                          </div>
              
                <li><a><span>{post.likes.length} Likes</span></a></li>
               </ul>			   
              </div>
              {/* <div class="cardbox-comments">
               <span class="comment-avatar float-left">
                <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."/></a>                            
               </span>
               <div class="search">
                <input placeholder="Write a comment" type="text"/>
                <button><i class="fa fa-camera"></i></button>
               </div>
              </div>			   */}
                   
               </div>
         
              </div>
              
               
             </div>
            </div>
           </section>
      </>
    )
  })
}
    </>
  )
}

export default Profile