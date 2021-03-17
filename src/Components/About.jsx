import React from 'react'
import Common from './Common'
import Web from './hero-img.png'
import Footer from './Footer'
import MarginDown from '../index.css'

const About = () => {
  return (
    <>
      <Common
        imgSrc={Web}
        textData='Welcome To About Page '
        btnDAta='Contact Here'
        location='/contact'
      />
      <Footer MarginDown={MarginDown} />
    </>
  )
}

export default About
