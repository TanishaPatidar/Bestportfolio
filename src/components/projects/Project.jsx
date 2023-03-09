import React from 'react'
import "./project.css"
import project_22 from "../../components/assets/project_22.png"
import project_3 from "../../components/assets/project_3.jpg"
import project_11 from "../../components/assets/project_11.png"
const data=[
  {
    id:1,
    image:project_11,
    title:'A React Dashboard using react, Scss and javscript',
    github:"https://github.com/TanishaPatidar/taniadmin",
    demo:"https://react-dashboard0.netlify.app/",
    para1:" A dashboard using react framework,While building this application I use react hook, material ui and many more ES6 concept.",
    para2:"Tools/Technology Used: HTML, CSS, JAVA-SCRIPT, React.js"

  },
  {
    id:2,
    image:project_22,
    title:'Unichat- A Real Time Chat Application',
    github:"https://github.com/TanishaPatidar/Unichat",
    demo:"http://unichatme.000webhostapp.com/",
    para1:"Build a chat application for an organization that doesn’t want to use any other chat application because of fear of data lack. ",
    para2:"Tools/Technology Used: HTML, CSS, PHP, JAVA-SCRIPT, MYSQL"


  },
  {
    id:3,
    image:project_3,
    title:'Music to my ears-A stylish music player ',
    github:"https://github.com/TanishaPatidar/Music-player",
    demo:"https://play-music1.netlify.app/",
    para1:"It has several features like a time duration, repeat and play/pause a song,or play the next or previous song",
    para2:"Tools/Technology Used: HTML, CSS, Visual Studio Code, JavaScript"

  },

 
]

const Project = () => {
  return (
   <section id="project">
     <h5>My Recent Work</h5>
     <h2>Projects</h2>

     <div className=" container project_container">
       {
         data.map(({id,image,title,github,demo,para1,para2})=>{
           return(
            <article key={id} className='project_item'>
            <div className="project_item_img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{para1}</p>
            <p><b>{para2}</b></p>
  
            <div className="project_btn">
            <a href={github} className='btn ' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>   
         </article>
           )
         })
       }
        
     </div>
     <a href="https://github.com/TanishaPatidar" className='project_more' target="_blank">More Projects</a>
   </section>
  )
}

export default Project