import React,{useState} from 'react';
import NavElement from './Navbar'
import './About.css'

export default function About(){
  const [education, setEducation] = useState([
    {type:"B.Tech.",
     institute:"RIT Islampur",
     marks:"6.91 CGPA"},
    {type:"HSC",
    institute:"LKVP Palus",
    marks:"63.7%"},
    {type:"SSC",
    institute:"PVDP Palus",
    marks:"76.2%"}
  ]);
  const [interests,setInterests] =useState(["motorsport", "travelling" ,"music", "reading"]);
  const [skills, setSkills] = useState([
    'html','css','javascript','react','nodejs','mongodb','sql','unix-platform','windows-platform'
    
  ])
   return(
     <div>
       <NavElement/>
       <div >
       <div className="text-light parent1 p-5">
           <h1 style={{fontSize:"3.4rem"}} className="d-flex title justify-content-center">About Me </h1>
           <p className="d-flex justify-content-center content-n" style={{fontSize:"2rem"}}>Welcome! here is a general information and contact details about me.</p>     
       </div>
       <div className="container ">
       <div className="row " style={{marginTop:"10%"}}>
             <div className="col-md-6 col-lg-6 content-n">
             <h2 className="title_">I am Abhijeet Varude.</h2>
             <p>
             Performance driven individual looking for a challenging role in reputable organization to utilize my technical skills for the growth of the organization as well as to 
             enhance my knowledge about new and emerging trends in IT sector.
             </p>
              <p>I am from Sangli,India. I have completed B.tech in Electronics and Telecommunication from RIT Islampur,Maharashtra.
              My core area of interests are web development. Apart from technology music , design are my areas of interest.</p>  

               </div>
             <div className="col-md-6 col-lg-6">
             <h4 className="title_">Skills:</h4>      
              {
                skills.map((t)=>{
                  return(
                  <button className="btn btn-outline-dark  m-2" style={{fontSize:"1rem"}}>{t}</button> 
                  )
                })
              }  

              <h4 className="title_ mt-3">Education:</h4>
              {              
              education.map((e)=>{
                return(
                  <div className="row mt-3" style={{borderBottom:"2px solid #e1e2e6"}}>
                <div className="col-8 ">
                  <p>{e.type}({e.institute})</p>
                </div>  
                <div className="col-4 text-right" style={{fontStyle:"oblique"}}>
                  {e.marks}
                </div>

                </div>
              
                )
              })
              }
              </div>
              <div>
                
              
             </div>
           </div>       
        </div>
       </div>
     </div>
   )
}