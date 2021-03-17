import React, { useState } from 'react'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    text: '',
    contact: '',
  })

  let changeValue = (event) => {
    const { name, value } = event.target
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      }
    })
  }

  let submitForm = (e) => {
    e.preventDefault()
    toast.success('Form Submitted!!', {
      position: 'top-center',
    })
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-10 col-11 mx-auto'>
            <h4 className='display-6 text-center mb-4'>Contact US</h4>
            <div className='row'>
              <div className='col-md-8 col-12 mx-auto'>
                <div className='card shadow shadow-md p-4'>
                  <form onSubmit={submitForm}>
                    <div className='mb-3'>
                      <label
                        for='exampleFormControlInput1'
                        className='form-label'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        value={data.name}
                        name='name'
                        onChange={changeValue}
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Enter Your Name'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label
                        for='exampleFormControlInput1'
                        className='form-label'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        value={data.email}
                        name='email'
                        onChange={changeValue}
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='abc@gmail.com'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label
                        for='exampleFormControlInput1'
                        className='form-label'
                      >
                        Contact No.
                      </label>
                      <input
                        type='number'
                        value={data.contact}
                        name='contact'
                        onChange={changeValue}
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='+91 9090909090'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label
                        for='exampleFormControlTextarea4'
                        className='form-label'
                      >
                        Feedback/Message
                      </label>
                      <textarea
                        className='form-control'
                        id='exampleFormControlTextarea4'
                        rows='3'
                        value={data.text}
                        name='text'
                        onChange={changeValue}
                      ></textarea>
                    </div>
                    <button type='submit' class='homeBtn'>
                      Submit
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
