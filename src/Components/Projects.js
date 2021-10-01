import React,{useState} from 'react';
import NavElement from './Navbar'
import './Projects.css'

export default function Projects(){
   const [projects,setProjects] = useState([
    {
      name:"Zendesk",
      about:"A Zendesk which has features of calender for daily recordings , links query section and may more ...",
      tech:['MERN Stack'],
      gitLink:["https://github.com/abhivarude/zendesk-app.git","https://github.com/abhivarude/zendesk-routes.git"],
      link:"https://zendesk-app-student.herokuapp.com/",  
      pic:"https://res.cloudinary.com/abhiscompany/image/upload/c_fit,h_469,w_607/v1632990519/Screenshot_from_2021-09-30_13-14-58_uxbzqs.png"
      },
      {
        name:"Country Logger",
        about:"A Country Logger which consists data of more than 50 countries with easy access",
        tech:['MERN Stack'],
        gitLink:["https://github.com/abhivarude/country-logger-frontend.git","https://github.com/abhivarude/country-loggger-backend.git"],
        link:"https://country-logger-frontend.herokuapp.com/",  
        pic:"https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_623/v1632990527/country-logger_aoc2m9.png"
        },
        {
          name:"Shortner",
          about:"Url-Shortner with features like url shortning , save , add and many more...",
          tech:['MERN Stack'],
          gitLink:["https://github.com/abhivarude/urlshortner_frontend_updated.git","https://github.com/abhivarude/urlshortner_backend.git"],
          link:"  https://urlshortner-abhi.herokuapp.com/",  
          pic:"https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_616/v1632990522/url_aywhab.png"
          },  
      {
      name:"Stack Overflow",
      about:"A simple Stack Overflow clone.Which consists features like posting questions, accepting responses, voting to responses and many more...",
      tech:['MERN Stack'],
      gitLink:["https://github.com/abhivarude/stack-overflow.git","https://github.com/abhivarude/stack-overflow-backend.git"],
      link:" https://stack-overflow-frontend.herokuapp.com/",  
      pic:"https://res.cloudinary.com/shubh8991/image/upload/v1619166130/Screenshot_from_2021-04-23_13-44-49_royri5.jpg"
      },
     
         
      
       {
         name:"You Tube Clone",
         about:"You Tube clone which has many features like You Tube.",
         tech:['HTML','CSS','Javascript'],
         gitLink:["https://github.com/abhivarude/youtube-clone.git"],
         link:"https://abhivarude.github.io/youtube-clone/",
         pic:"https://res.cloudinary.com/shubh8991/image/upload/v1619172110/Screenshot_from_2021-04-23_15-30-06_t3ewhb.jpg"  
       }

   ])
   return(
     <div>
       <NavElement/>
       <div >
       <div >
       <div className="text-light p-5 parent1" >
           <h1 style={{fontSize:"3.4rem"}} className="d-flex title justify-content-center">Projects</h1>
           <p className="d-flex justify-content-center content-n" style={{fontSize:"2rem"}}>I have used my technical knowledge and creativity to build following projects.</p>     
       </div>
       <div className="container " style={{padding:"4%"}}>
       {
         projects.map((e,i)=>{
           return(
               i%2 ===0 ?             
              <div className=" _content pt-2" >
               <div className="row">
               <div className="col-md-6 col-lg-4 mt-3 ">
                 <h3 className="title_ text-center">{e.name}</h3>        
                 <p className="content-n text-center">{e.about}</p>   
                 <p className="mt-3 text-center">
                 <i class="fa fa-code " aria-hidden="true"></i>
                 {
                   e.tech.map((t)=>{
                     return(
                      <span className=" border border-dark rounded-pill p-2 color" style={{fontSize:"1rem"}}>{t}</span> 
                     )
                   })                 
                 }  
                 </p>
                 <div> 
                 <p className="content-n text-center">
                 <i class="fa fa-github" aria-hidden="true"></i>  
                 <a className="color" href={e.gitLink[0]} target="_blank">Frontend Repo.</a>
                 </p>
                 
                 {
                  e.gitLink[1] !== undefined ?
                 <p className="content-n text-center" >
                 <i class="fa fa-github" aria-hidden="true"></i>  
                 <a className="color" href={e.gitLink[1]} target="_blank">Backend Repo.</a>
                 </p>
                 :
                 null 
                  }
              </div>
                 <p className="text-center">
                 <span className="content-n ">
                 <i class="fa fa-link" aria-hidden="true"></i>  
                 <a className="color" target="_blank" href={e.link}>Project Url</a>
                 </span> 
                 </p>
               
               </div>
               <div className=" col-md-6 col-lg-8 mt-3 mb-3" style={{backgroundColor:"#e8e8e8"}}> 
               <div className="d-flex justify-content-center" style={{position:"relative",top:"15%"}}>
               <img  style={{boxShadow:"10px 20px 38px #888888"}} height="" src={e.pic} />
               </div >
               </div >
               </div>
             </div>
            :
            <div className=" _content pt-2" >
            <div className="row">
            <div className="col-md-4 col-lg-8 mt-3 mb-3 p-3" style={{backgroundColor:"#e8e8e8"}}> 
            <div className="d-flex justify-content-center" style={{position:"relative",top:"15%"}}>
            <img  style={{boxShadow:"10px 20px 38px #888888"}} height="" src={e.pic} />
            </div >
            </div >  
            <div className="col-md-4 col-lg-4 mt-3">
              <h3 className="title_ text-center">{e.name}</h3>        
              <p className="content-n text-center">{e.about}</p>   
              <p className="mt-3 text-center">
              <i class="fa fa-code " aria-hidden="true"></i>
              {
                e.tech.map((t)=>{
                  return(
                   <span className=" border border-dark rounded-pill p-2 color" style={{fontSize:"1rem"}}>{t}</span> 
                  )
                })                 
              }  
              </p>
              <div> 
                 <p className="content-n text-center">
                 <i class="fa fa-github" aria-hidden="true"></i>  
                 <a className="color" href={e.gitLink[0]} target="_blank">Frontend Repo.</a>
                 </p>
       
                 <p className="content-n text-center">
                 <i class="fa fa-github" aria-hidden="true"></i>  
                 <a className="color" href={e.gitLink[1]} target="_blank">Backend Repo.</a>
                 </p> 
                
              </div>
              <p className="text-center">
              <span className="content-n">
              <i class="fa fa-link" aria-hidden="true"></i>  
              <a className="color " href={e.link}>Project Url</a>
              </span> 
              </p>
            
            </div>
            
            </div>
          </div>
           )
         })
       }
       </div>
       </div>
       </div>
     </div>
   )
}