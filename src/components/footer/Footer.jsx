import React from 'react'
import "./footer.css"
import {BsInstagram} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"


const Footer = () => {
  return (
     <footer>
       <a href="#" className='footer_logo footer_animation'>TANISHA PATIDAR </a>

       <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience </a></li>
         <li><a href="#project">Project</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer_socials">
         <a href="https://facebook.com"><FiFacebook/></a>
         <a href="https://instagram.com"><BsInstagram/></a>
         <a href="https://twitter.com"><FiTwitter/></a>
       </div>

       <div className="footer_copyright">
         <small> &copy; Tanisha Patidar. All rights reserved </small>
       </div>

     </footer>
  )
}

export default Footer