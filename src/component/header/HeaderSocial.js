import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkdin.com' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial