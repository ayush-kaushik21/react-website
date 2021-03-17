import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Card = ({ imgSrc, title }) => {
  return (
    <div>
      <div className='card shadow shadow-md hoverState'>
        <div className='cardImgSize'>
          <img src={imgSrc} className='card-img-top imgFit' alt={title} />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to='#' className='homeBtn'>
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Card
