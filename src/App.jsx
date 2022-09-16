import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
import { Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CategoriesPage from './pages/CategoriesPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import WholesalePage from './pages/WholesalePage'
import DeliveryPay from './pages/DeliveryPay'
import MakingAnOrder from './pages/MakingAnOrder'
import CatalogPage from './pages/CatalogPage'

// Роутинг компонентов
function App() {
  return (
    <Layout>
      <Switch>
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
          <CatalogPage />
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
        {/*Каталог*/}
        <Route exact path="/catalog">
          <CatalogPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
