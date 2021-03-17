import React from 'react'
import Common from './Common'
import Web from './img2.svg'
import Footer from './Footer'
import MarginUP from '../index.css'

const Home = () => {
  return (
    <>
      <Common
        imgSrc={Web}
        textData='Grow Your Business With '
        btnDAta='Get Started'
        location='/about'
      />
      <Footer MarginUP={MarginUP} />
    </>
  )
}

export default Home
