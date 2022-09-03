import React, { useState } from 'react'
import cn from 'clsx'
import styles from './sliderProducts.module.scss'
import { sliderProducts } from '../../../libs/configs/sliderProducts'
import gift from '../../../assets/images/sliderProducts/gift.svg'
import leftArrow from '../../../assets/images/slider_left_arrow.svg'
import rightArrow from '../../../assets/images/slider_right_arrow.svg'

const SliderProducts = () => {
  const wrapper = cn('wrapper', styles.sliderProductWrapper)
  const [offset, setOffset] = useState(0)

  const nextSlide = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 318
      const maxOffset = -636
      console.log(newOffset, maxOffset)

      return Math.max(newOffset, maxOffset)
    })
  }
  const prevSlide = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 318
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  return (
    <div className={styles.blockSliderProduct}>
      <div className={wrapper}>
        <div className={styles.sliderUpBlock}>
          <h2 className={styles.sliderTitle}>Наши популярные продукты</h2>
          <div className={styles.sliderButtons}>
            <img onClick={prevSlide} src={leftArrow} alt="leftArrow" className={styles.sliderLeftArrow} />
            <img onClick={nextSlide} src={rightArrow} alt="rightArrow" className={styles.sliderRightArrow} />
          </div>
        </div>
        <div className={styles.slides}>
          {sliderProducts.map((item, index) => {
            return (
              <div key={index} className={styles.slide} style={{ transform: `translateX(${offset}px)` }}>
                <img src={item.image[Object.keys(item.image)[0]]} alt={item.title} className={styles.slideImg} />
                <p className={styles.slideTitle}>{item.title}</p>
                <div className={styles.slideBlockPrice}>
                  <p className={styles.slideItemPriceNumber}>{item.price}</p>
                  <p className={styles.slideItemPriceNumberStrike}>{item.crossedPrice}</p>
                </div>
                <div className={styles.slideInfo}>
                  <div className={styles.inStock}>
                    <img src={item.icon[Object.keys(item.icon)[0]]} alt={item.title} className={styles.inStockImg} />
                    <p className={styles.inStockText}>{item.inStock}</p>
                  </div>
                  <div className={styles.sale}>SALE</div>
                  <div className={styles.blockDown}>
                    <img src={gift} className={styles.giftImage} />
                    <p className={styles.giftText}>Подарок</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SliderProducts
