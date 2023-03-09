import React from 'react'
import "./about.css"
import ME from "../../components/assets/7450187.jpg"
import {SlBadge} from "react-icons/sl"



const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <SlBadge className='about_icon'/>
              <h5>B.tech(Information Technology)</h5>
              <small>CGPA-8.65 (2019-2023)</small>
            </article>

            <article className='about_card'>
              <SlBadge className='about_icon'/>
              <h5>Higher Secondary(12th)</h5>
              <small>94.66% (Barwani District Topper)</small>
            </article>

            <article className='about_card'>
              <SlBadge className='about_icon'/>
              <h5>High School(10th)</h5>
              <small>94.40 (3rd Rank in Barwani District )</small>
            </article> 
          </div>
          
          <p>
          I'm a Frontend Developer whose whole interest is building interactive, accessible, and responsive websites. My project section contains some beautiful websites I've built.
          </p>
           <p>
           I'm currently open to Job opportunities where I can contribute to your business and make your users happy. Contact me if you're interested in having a taste of my skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>

        </div>
      </div>
    </section>
  )
}

export default About