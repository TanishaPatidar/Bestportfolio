import React from 'react'
import Button from '../buttons/Button'
import ME from '../../components/assets/7450220.jpg'
import "./header.css"
import Headersocial from '../socials/Headersocial'


const Header = () => {
  return (
    <header>
        <section className=" container header_container">
            <h5>Hello I'm</h5>
            <h1>Tanisha Patidar</h1>
            <h5 className='//text-light'>Fronted Developer</h5>
            <Button/>
            <Headersocial />
            
            <div className="me">
                <img src={ME} alt="me" className='rounded' />
            </div>

            <a href="#contact" className='scrollDown'>Scroll Down</a>
        </section>
    </header>
  )
}

export default Header