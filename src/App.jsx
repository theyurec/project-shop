import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
// import Info from './components/app/Layout/About/Info'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
// import WholesalePage from './pages/WholesalePage/WholesalePage'

// Роутинг компонентов
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
