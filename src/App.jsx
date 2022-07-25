import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
// import Info from './components/app/Layout/About/Info'
import { Route, Switch } from 'react-router-dom'
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
    <Layout>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/sales">
          <WholesalePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/delivery">
          <DeliveryPay />
        </Route>
        <Route exact path="/payments">
          <MakingAnOrder />
        </Route>
        {/*Категории*/}
        <Route exact path="/categories">
          <MakingAnOrder />
        </Route>
        <Route exact path="/categories/:id">
          <MakingAnOrder />
        </Route>
        <Route exact path="/products/:id">
          <MakingAnOrder />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
