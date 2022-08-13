import React, { Fragment } from 'react'
import Slider from '../../components/app/Slider'
import Info from '../../components/app/About/Info'
import Why from '../../components/app/Why'

const MainPage = () => {
  return (
    <Fragment>
      <Slider />
      <Info />
      <Why />
    </Fragment>
  )
}

export default MainPage
