import './assets/styles.css'
import React from 'react'
import Layout from './components/app/Layout'
import Info from './components/app/Layout/Info'

// Роутинг компонентов
function App() {
  return (
    <Layout>
      <Info />
    </Layout>
  )
}

export default App
