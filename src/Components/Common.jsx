import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = ({ imgSrc, textData, btnDAta, location }) => {
  return (
    <div>
      <div className='my-5'>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-10  mx-auto'>
              <div className='row '>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mainContent'>
                  <h2>
                    {textData}
                    <span className='text-uppercase font-weight-bold my-5 newNavBar'>
                      KAushik_Tech
                    </span>
                  </h2>
                  <h4 className='text-capitalise my-3'>
                    We are team of talented developers making Website
                  </h4>
                  <div className='btns'>
                    <NavLink to={location} className='homeBtn'>
                      {btnDAta}
                    </NavLink>
                  </div>
                </div>

                {/*  */}
                <div className='col-md-6 col-12 order-1 order-md-2'>
                  <div className='imgDiv d-flex  justify-content-center align-items-center'>
                    <img
                      src={imgSrc}
                      alt='img'
                      srcset=''
                      className='img-fluid animated'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Common
