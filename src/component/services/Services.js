import React from 'react'
import './services.css';
import{BsPatchCheckFill} from 'react-icons/bs';
const Services = () => {
  return (
    <section id='services'>
      <h5>what i offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Developement</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Developement</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
            <li>
              <BsPatchCheckFill className='service_list-icon'/>
              <p>Hello guys</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services