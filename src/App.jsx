import React from 'react'
import NavBar from './NavBar'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Service from './Components/Services/Service'
import PartnersOverview from './Components/Partners/PartnersOverview'
import Article from './Components/Articles/Article'
import Footer from './Footer'
import Contacts from './Components/Contacts/Contacts'

const App = () => {
  return (
    <div className='app_container'>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/service' element={<Service />} />
        <Route path='/partners' element={<PartnersOverview />} />
        <Route path='/articles' element={<Article />} />
        {/* <Route path='/touch' element={<Touch />} /> */}
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
