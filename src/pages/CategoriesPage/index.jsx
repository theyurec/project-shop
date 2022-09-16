import React from 'react'
import style from './categoriesPage.module.scss'
import cn from 'clsx'
import { categoriesPage } from './categoriesPage'
import { Link } from 'react-router-dom'
import iconHome from '../../assets/images/categoriesPage/iconHome.svg'

const CategoriesPage = () => {
  const wrapper = cn('wrapper', style.WrapperCategoriesPage)
  return (
    <div className={style.blockCategoriesPage}>
      <div className={wrapper}>
        <div className={style.navCategoriesPage}>
          <span className={style.navigation}>Главная</span>
          <img src={iconHome} alt="iconHome" className={style.navImage} />
        </div>
        <h2 className={style.title}>Категории</h2>
        <div className={style.categories}>
          {categoriesPage.map((item, index) => {
            return (
              <Link key={index} to={item.link}>
                <div className={style.category}>
                  <img src={item.image[Object.keys(item.image)[0]]} alt={item.name} className={style.categoryImage} />
                  <span className={style.categoryName}>{item.name}</span>
                </div>
              </Link>
            )
          })}
        </div>
        <Link className={style.categoriesPageLink} to="/catalog">
          <button className={style.categoriesPageBtn}>Смотреть все</button>
        </Link>
      </div>
    </div>
  )
}

export default CategoriesPage
