import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'

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
