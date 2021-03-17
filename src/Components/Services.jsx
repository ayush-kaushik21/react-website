import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import Footer from './Footer'

const Services = () => {
  return (
    <div>
      <h1 className='text-center display-4 '>Our Services</h1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-10 col-10 mx-auto'>
            <div className='row'>
              {Sdata.map((item) => (
                <>
                  <div className='col-md-4 my-3'>
                    <Card imgSrc={item.imgSrc} title={item.title} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
