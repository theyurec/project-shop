import React from 'react'
import styles from './mainCategories.module.scss'
import cn from 'clsx'
import { Link } from 'react-router-dom'
import { mainCategories } from '../../../libs/configs/mainCategories'

const MainCategories = () => {
  const wrapper = cn('wrapper', styles.wrapperMainCategories)
  return (
    <div className={styles.mainCategories}>
      <div className={wrapper}>
        <h2 className={styles.titleCategories}>Категории</h2>
        <div className={styles.categories}>
          {mainCategories.map((item, index) => {
            console.log(Object.keys(item.image)[0])
            return (
              <div key={index} className={styles.category}>
                <img src={item.image[Object.keys(item.image)[0]]} alt={Object.keys(item.image)[0]} className={styles.categoryImage} />
                <div className={styles.categoryBlockBtn}>
                  <p className={styles.categoryName}>{item.text}</p>
                  <Link to={item.link}>
                    <button className={styles.categoryBtn}>Перейти</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <Link to="/categories" className={styles.categoriesLink}>
          <button className={styles.allCategoriesBtn}>Смотреть все</button>
        </Link>
      </div>
    </div>
  )
}

export default MainCategories
