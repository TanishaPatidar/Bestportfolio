import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"
import "./experience.css"

const Experience = () => {
  return (
   <section id ='experience'>
   
   
     <h5>What Skills I have</h5>
     <h2>My Experience</h2>

     <div className="container exp_container">
       <div className="ex_frontend">
         <h3>Frontend Development</h3>
         <div className="exp_content">
           <article className='exp_details'>
            <BsPatchCheckFill className='icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
           </article>

           <article className='exp_details'>
            <BsPatchCheckFill className='icon'/>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
           </article>

           <article className='exp_details'>
            <BsPatchCheckFill className='icon'/>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
           </article>

           <article className='exp_details'>
            <BsPatchCheckFill className='icon'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
           </article>

           <article className='exp_details'>
            <BsPatchCheckFill className='icon'/>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </article>

           <article className='exp_details'>
            <BsPatchCheckFill className='icon'/>
            <h4>SCSS</h4>
            <small className='text-light'>Experienced</small>
           </article>
         </div>
       </div>
     </div>
   </section>
  )
}

export default Experience