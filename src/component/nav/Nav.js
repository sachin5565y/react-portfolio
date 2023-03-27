import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';
const Nav = () => {
  const [activeNav,setAactiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setAactiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setAactiveNav('#about')}className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#experience'onClick={()=>setAactiveNav('#experience')}className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#services'onClick={()=>setAactiveNav('#services')}className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href='#contact'onClick={()=>setAactiveNav('#contact')}className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav