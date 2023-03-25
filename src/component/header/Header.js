import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello  I'm</h5>
        <h1>Sachin Yadav</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
        <img src={ME} className="img-fluid" alt="..."/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header