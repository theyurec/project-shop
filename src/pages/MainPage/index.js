import React, { Fragment } from 'react'
import Slider from '../../components/app/Slider'
import Info from '../../components/app/About/Info'
import Advantage from '../../components/app/Advantage'
import MainCategories from '../../components/app/mainCategories'
import SliderProducts from '../../components/app/SliderProducts'
import FormFeedback from '../../components/app/Layout/FormFeedback'

const MainPage = () => {
  return (
    <Fragment>
      <Slider />
      <Info />
      <Advantage />
      <MainCategories />
      <SliderProducts />
      <FormFeedback />
    </Fragment>
  )
}

export default MainPage
