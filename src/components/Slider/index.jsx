import React, { useState } from 'react'
import cn from 'clsx'
import styles from './slider.module.scss'
import { slides } from '../../libs/configs/slides'
import slide_left_arrow from '../../assets/images/slider_left_arrow.svg'
import slide_right_arrow from '../../assets/images/slider_right_arrow.svg'

const Slider = () => {
  const wrapper = cn('wrapper', styles.sliderWrapper)
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const moveCircle = (index) => {
    setCurrent(index)
  }
  return (
    <div className={styles.blockSlider}>
      <div className={wrapper}>
        {slides.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {index === current && (
                <div className={styles.slide}>
                  <img src={item.image[Object.keys(item.image)[0]]} alt={item.title} className={styles.slideImg} />
                  <div className={styles.slideBlockText}>
                    <h2 className={styles.slideTitle}>
                      Golden Soft
                      <br />
                      {item.title}
                    </h2>
                    <p className={styles.slideText}>{item.text1}</p>
                    <p className={styles.slideText}>{item.text2}</p>
                    <p className={styles.slideItemPrice}>Цена</p>
                    <div className={styles.slideBlockPrice}>
                      <p className={styles.slideItemPriceNumber}>{item.price}</p>
                      <p className={styles.slideItemPriceNumberStrike}>{item.crossedPrice}</p>
                    </div>
                    <button className={styles.btnSlideAdd}>Добавить в корзину</button>
                  </div>
                </div>
              )}
            </React.Fragment>
          )
        })}
        <div className={styles.btnSlide}>
          <button className={styles.slideArrow} onClick={prevSlide}>
            <img src={slide_left_arrow} alt="left_arrow" />
          </button>
          <div className={styles.slideCircles}>
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => moveCircle(index)}
                  className={`${current === index ? styles.slideCircleActive : styles.slideCircle}`}
                />
              )
            })}
          </div>
          <button className={styles.slideArrow} onClick={nextSlide}>
            <img src={slide_right_arrow} alt="right_arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider
