import React from 'react';
import './experience.css';
import{BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>waht skills i have</h5>
      <h2> My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Developement</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>HTML</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>Boosstrap</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>Reactjs</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>Talwind</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
        <h3>Backend Developement</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>Nodejs</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>django</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill/>
            <div><h4>Mysql</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>Mongodb</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>PhP</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience