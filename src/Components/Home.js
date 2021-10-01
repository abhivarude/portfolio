import React from 'react';
import {Link} from 'react-router-dom';
import NavElement from './Navbar'
import './Style.css'

export default function Home(){
   return(
     <div className="parent"> 
     <div style={{ }}>     
     <div class="stars" />
      <div class="twinkling" />
      <div class="clouds" />
      <div style={{zIndex:"5"}}>
      </div>  
      <NavElement/>
      </div>  

      <div className="col-12 prime" style={{zIndex:"3"}}> 
      <div className="row">
        <div className="col-md-6  col-lg-6 content">
         <div className=" offset-md-5 offset-lg-3 text-light">
         <p className="head1 font1">Hello... I am <br></br>Abhijeet </p>
         <p className="para font2">An aspiring fresher in full stack development .</p>
         <div >
        <Link to='/projects'><button className="btn btn-md btn-light font2">Projects</button></Link>
        <Link to='/about'> <button className="btn btn-md btn-light font2 ml-3">About</button></Link>
        <a target="_blank" href="https://drive.google.com/file/d/1oWpa2cCtstPhgTr7hciY-lsbgXcOIUN_/view?usp=sharing"><button className="btn btn-md btn-danger font2 ml-3">Resume</button></a>
         </div> 
         </div>
        </div> 
        <div className="col-md-6  col-lg-6">
        <img className="img-fluid pic " alt="Smiley face" src="https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_616/v1632992184/profile_hc6hwg.jpg"  
        />
        </div> 
       </div> 
       
        
      </div>     
     </div> 
   ) 
}