import React from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
// import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/'></Redirect>
      </Switch>
    </>
  )
}

export default App
