import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
// import Info from './components/app/Layout/About/Info'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
// import CatalogPage from './pages/CatalogPage'
// import CategoriesPage from './pages/CategoriesPage'
// import ProductPage from './pages'
import AboutPage from './pages/AboutPage'
import WholesalePage from './pages/WholesalePage'
import DeliveryPay from './pages/DeliveryPay'
import MakingAnOrder from './pages/MakingAnOrder'

// Роутинг компонентов
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/sales">
            <WholesalePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/delivery">
            <DeliveryPay />
          </Route>
          <Route path="/payments">
            <MakingAnOrder />
          </Route>
          {/*Категории*/}
          <Route path="/categories">
            <MakingAnOrder />
          </Route>
          <Route path="/categories/:id">
            <MakingAnOrder />
          </Route>
          <Route path="/products/:id">
            <MakingAnOrder />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
