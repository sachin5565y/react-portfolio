import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
const contact = () => {
  return (
    <section id='contact'>
        <h5>GEt In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact_container'>
             <div className='contact_options'>
                <article className='contact_option'>
                    <MdOutlineEmail className='contact_option-icons'/>
                    <h4>Email</h4>
                    <h5>xyz@gmail.com</h5>
                    <a href="mailto:sy990510@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
                </article>
                <article className='contact_option'>
                    <BsWhatsapp className='contact_option-icons'/>
                    <h4>WhatsApp</h4>
                    <h5>My number </h5>
                    <a href="https://api.whatsapp.com//send?phone=+7827513090" target='_blank' rel='noreferrer'>Send a message</a>
                </article>
           </div>
           {/* End of Contact */}
           <form  action=''>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='"Your Email' required/>
            <textarea name='message' id='' cols='30' rows='7' placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
        </div>
    </section>
  )
}

export default contact