import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
=======
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CategoriesPage from './pages/CategoriesPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import WholesalePage from './pages/WholesalePage'
import DeliveryPay from './pages/DeliveryPay'
import MakingAnOrder from './pages/MakingAnOrder'
>>>>>>> fc4bf6062d59c2fbfd38809ea261d06dcf2eba3d

// Роутинг компонентов
function App() {
  return (
    <Layout>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
=======
        {/*Главная*/}
        <Route exact path="/">
          <MainPage />
        </Route>
        {/*Оптовая продажа*/}
        <Route path="/sales">
          <WholesalePage />
        </Route>
        {/*О нас*/}
        <Route path="/about">
          <AboutPage />
        </Route>
        {/*Категории*/}
        <Route exact path="/categories">
          <CategoriesPage />
        </Route>
        <Route exact path="/categories/:id">
          <CategoriesPage />
        </Route>
        {/*Продукт*/}
        <Route exact path="/products/:id">
          <ProductPage />
        </Route>
        {/*Доставка и оплата*/}
        <Route exact path="/delivery">
          <DeliveryPay />
        </Route>
        {/*Оформление заказа*/}
        <Route exact path="/payments">
          <MakingAnOrder />
        </Route>
>>>>>>> fc4bf6062d59c2fbfd38809ea261d06dcf2eba3d
      </Switch>
    </Layout>
  )
}

export default App
