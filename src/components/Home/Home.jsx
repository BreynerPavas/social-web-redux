import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/meme.webp';
import './Home.scss'


const Home = () => {
  return (
    <>
    
    <section class="hero">
         <div class="container">
          <div class="row">	
		  
		   <div class="col-lg-6 offset-lg-3">
			
			<div class="cardbox shadow-lg bg-white">
			 
			 <div class="cardbox-heading">
              
			  <div class="m-0">
			   <div class="d-flex mr-3">
               
			   </div>
			   <div class="media-body d-flex postHeader">
               <img src={img} alt="" width={"30px"} className='userImg' />
			    <p class="m-0">Benjamin Robinson</p>
				
			   </div>
			  </div>
			 </div>
			  
			 <div class="cardbox-item">
			  <img class="img-fluid" src={img} alt="Image"/>
			 </div>
			 <div class="cardbox-base">
			  
			  <ul>
			   <li><a><span>242 Likes</span></a></li>
			  </ul>			   
			 </div>
			 <div class="cardbox-comments">
			  <span class="comment-avatar float-left">
			   <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."/></a>                            
			  </span>
			  <div class="search">
			   <input placeholder="Write a comment" type="text"/>
			   <button><i class="fa fa-camera"></i></button>
			  </div>
			 </div>			  
					
			</div>

           </div>
		   
			
          </div>
         </div>
    </section>
    <section class="hero">
         <div class="container">
          <div class="row">	
		  
		   <div class="col-lg-6 offset-lg-3">
			
			<div class="cardbox shadow-lg bg-white">
			 
			 <div class="cardbox-heading">
              
			  <div class="m-0">
			   <div class="d-flex mr-3">
               
			   </div>
			   <div class="media-body d-flex postHeader">
               <img src={img} alt="" width={"30px"} className='userImg' />
			    <p class="m-0">Benjamin Robinson</p>
				
			   </div>
			  </div>
			 </div>
			  
			 <div class="cardbox-item">
			  <img class="img-fluid" src={img} alt="Image"/>
			 </div>
			 <div class="cardbox-base">
			  
			  <ul>
			   <li><a><span>242 Likes</span></a></li>
			  </ul>			   
			 </div>
			 <div class="cardbox-comments">
			  <span class="comment-avatar float-left">
			   <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."/></a>                            
			  </span>
			  <div class="search">
			   <input placeholder="Write a comment" type="text"/>
			   <button><i class="fa fa-camera"></i></button>
			  </div>
			 </div>			  
					
			</div>

           </div>
		   
			
          </div>
         </div>
    </section><section class="hero">
         <div class="container">
          <div class="row">	
		  
		   <div class="col-lg-6 offset-lg-3">
			
			<div class="cardbox shadow-lg bg-white">
			 
			 <div class="cardbox-heading">
              
			  <div class="m-0">
			   <div class="d-flex mr-3">
               
			   </div>
			   <div class="media-body d-flex postHeader">
               <img src={img} alt="" width={"30px"} className='userImg' />
			    <p class="m-0">Benjamin Robinson</p>
				
			   </div>
			  </div>
			 </div>
			  
			 <div class="cardbox-item">
			  <img class="img-fluid" src={img} alt="Image"/>
			 </div>
			 <div class="cardbox-base">
			  
			  <ul>
			   <li><a><span>242 Likes</span></a></li>
			  </ul>			   
			 </div>
			 <div class="cardbox-comments">
			  <span class="comment-avatar float-left">
			   <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."/></a>                            
			  </span>
			  <div class="search">
			   <input placeholder="Write a comment" type="text"/>
			   <button><i class="fa fa-camera"></i></button>
			  </div>
			 </div>			  
					
			</div>

           </div>
		   
			
          </div>
         </div>
    </section>
    </>
  )
}

export default Home