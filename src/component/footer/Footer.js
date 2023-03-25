import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo'>SachinY</a>

    <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>        
        <li><a href='#contact'>Contact ME</a></li>        

    </ul>

    <div className='footer_socials'>
        <a href='https://facbook.com'><FaFacebook/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
    </div>
    <div className='footer_copyright'>
      <small>&copy; SachinY. All rights are reserved</small>
    </div>
   </footer>
  )
}

export default Footer