import React from 'react'
import { blockWhy } from '../../../libs/configs/blockWhy'
import cn from 'clsx'
import styles from './advantage.module.scss'

const Advantage = () => {
  const wrapper = cn('wrapper', styles.wrapperWhy)
  return (
    <div className={styles.blockWhy}>
      <div className={wrapper}>
        <h2 className={styles.blockWhyTitle}>Почему GoldenService?</h2>
        <div className={styles.whyInfo}>
          {blockWhy.map((item, index) => {
            return (
              <div key={index} className={styles.whyItem}>
                <img src={item.image[Object.keys(item.image)[0]]} alt={item.title} className={styles.whyImage} />
                <p className={styles.whyText}>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Advantage
