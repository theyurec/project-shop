import React from 'react'
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom'
>>>>>>> fc4bf6062d59c2fbfd38809ea261d06dcf2eba3d
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <Router>
      <Header />
      {children}
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> fc4bf6062d59c2fbfd38809ea261d06dcf2eba3d
    </Router>
  )
}

export default Layout
