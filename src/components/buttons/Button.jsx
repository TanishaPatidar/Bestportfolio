import React from 'react'
import CV from "../../components/assets/tanisha.pdf"

const Button = () => {
  return (
   <div className="button">
       <a href={CV} download className='btn'>Download CV</a>
       <a href="#contact" className='btn btn-primary '>Let's Talk</a>
   </div>
  )
}

export default Button