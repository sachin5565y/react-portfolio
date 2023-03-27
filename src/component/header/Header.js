import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import {motion} from 'framer-motion';
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello  I'm</h5>
        <h1>Sachin Yadav</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <motion.div initial={{x:'-80vw'}} animate={{x:-169}} transition={{type:'spring',duration:1,bounce:0.3}} className='me'>
        <img src={ME}  alt="..."/>
        </motion.div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header