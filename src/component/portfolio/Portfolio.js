import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG1} class="img-fluid" alt="..."/>
          </div>
          <h3>WeatherApp</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://sachin5565y.github.io/project/' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} class="img-fluid" alt="..."/>
          </div>
          <h3>Portfolio</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://sachin5565y.github.io/react-portfolio/#' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG3} class="img-fluid" alt="..."/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG4} class="img-fluid" alt="..."/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG5} class="img-fluid" alt="..."/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG6} class="img-fluid" alt="..."/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio