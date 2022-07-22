import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <Router>
      <Header />
      {children}
    </Router>
  )
}

export default Layout
