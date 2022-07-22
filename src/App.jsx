import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
import Info from './components/app/Layout/About/Info'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import WholesalePage from './pages/WholesalePage/WholesalePage'

// Роутинг компонентов
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/">
            <WholesalePage />
          </Route>
          <Route path="/">
            <AboutPage />
          </Route>
        </Switch>
        <Info />
      </Layout>
    </Router>
  )
}

export default App
