import React,{useState} from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"




const Nav = () => {
  const[activeNav,setactiveNav]=useState("#")
  return (
    <nav>
      <a href="#"  onClick={()=>setactiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>

      <a href="#about" onClick={()=>setactiveNav('#about')} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>

      <a href="#experience" onClick={()=>setactiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BsBook/></a>

      <a href="#project" onClick={()=>setactiveNav('#project')} className={activeNav==='#project'?'active':''}><AiOutlineFundProjectionScreen/></a>

      <a href="#contact" onClick={()=>setactiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageDetail/></a>

      


    </nav>
  )
}

export default Nav