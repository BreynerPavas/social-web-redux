
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/meme.webp';
import './Home.scss'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, like, unlike} from "../../features/post/postSlice";
import { Link } from 'react-router-dom';



const Home = () => {
	const { posts } = useSelector((state) => state.post);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, []);

	useEffect(() => {
		window.scrollTo(
			0,
			0
		  );
	}, []);
	
	
	const post = posts.map((post) => {
		const isAlreadyLiked = post.likes?.includes(user._id);
		
		
		
		console.log(isAlreadyLiked);
		
		return (
			
			<section class="hero">
			<div class="container">
			 <div class="row">	
			 
			  <div class="col-lg-6 offset-lg-3">
			   
			   <div class="cardbox shadow-lg bg-white">
				
				<div class="cardbox-heading">
				 
				<div class="m-0">
				 
				<div class="media-body d-flex postHeader">
				  <Link to={"/profile/"+post.userId?._id}>
								  <img src={img} alt="" width={"30px"} className='userImg' />
					</Link>
				  {
				  post.userId? 
				  <Link to={"/profile/"+post.userId?._id}>
					  <p className='m-0'>{post.userId.name}</p> 

				  </Link>:

				  
				  <p className='m-0'>Not user linked</p> 
				  }
				  
				   
				   
				  </div>
				  <p className='mx-4'> {post.title}	
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
					<div  className='likeButton' onClick={()=> dispatch(unlike(post._id))  }>
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
				
				  <li><a><span>{post.likes?.length} Likes</span></a></li>
				 </ul>			   
				</div>
					   
			   </div>
   
			  </div>
			  
			   
			 </div>
			</div>
	   </section>
		);
	  });
	
  return (
    <>
    
    {post}
    
    </>
  )
}

export default Home