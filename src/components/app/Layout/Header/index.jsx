import React, { useState } from 'react'
import cn from 'clsx'
import { mainMenu } from '../../../../libs/configs/mainMenu'
import styles from './Header.module.scss'
import logo from '../../../../assets/images/logo.svg'
import downArrow from '../../../../assets/images/down_arrow.svg'
import phone from '../../../../assets/images/icon-phone.svg'
import heart from '../../../../assets/images/icon-heart.svg'
import cart from '../../../../assets/images/icon-cart.svg'
import burgerArrow from '../../../../assets/images/burgerMenuArrow.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const wrapper = cn('wrapper', styles.headerWrapper)
  menuActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  const burgerBtnClicker = cn(styles.burgerBtnOnclick, { [styles.burgerBtnClick]: menuActive })
  const burgerMenu = cn(styles.burgerMenu, { [styles.burgerMenuActive]: menuActive })
  const OpenBurgerMenu = () => {
    setMenuActive(!menuActive)
  }
  return (
    <div className={styles.header}>
      <div className={wrapper}>
        <div className={styles.burgerBlock}>
          <div onClick={OpenBurgerMenu} className={styles.burgerBtn}>
            <span className={burgerBtnClicker} />
          </div>
        </div>
        <div className={burgerMenu}>
          <div className={styles.burgerMenuContent}>
            <div className={styles.burgerMenuList}>
              {mainMenu.map((item, index) => {
                return (
                  <Link key={index} onClick={OpenBurgerMenu} className={styles.burgerMenuItem} to={item.link}>
                    {item.name}
                    <img src={burgerArrow} alt="arrow" className={styles.burgerMenuArrow} />
                  </Link>
                )
              })}
            </div>
            <div className={styles.burgerContact}>
              <div className={styles.burgerContactPhone}>
                <img className={styles.iconBurgerPhone} src={phone} alt="phone" />
                <a className={styles.burgerPhone} href="tel: +7 (966) 55 88 499">
                  +7 (966) 55 88 499
                </a>
              </div>
              <a className={styles.phoneLink} href="tel: +7 (966) 55 88 499">
                Обратный звонок
              </a>
            </div>
          </div>
        </div>
        <div className={styles.mainBlock}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.menu}>
            {mainMenu.map((item, index) => {
              console.log(item)
              return (
                <div key={index} className={styles.headerItem}>
                  <Link className={styles.headerLink} to={item.link}>
                    {item.name}
                  </Link>
                  {!!item.children && <img className={styles.arrow} src={downArrow} alt="arrow" />}
                  {!!item.children && (
                    <>
                      <div className={styles.submenuList}>
                        {item.children.map((child, index) => {
                          return (
                            <div className={styles.submenu} key={index}>
                              <Link to={child.link}>{child.name}</Link>
                              <div className={styles.submenuLine} />
                            </div>
                          )
                        })}
                        <a href="#">
                          <button className={styles.btnSubmenu}>Смотреть все</button>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.headerContact}>
          <img className={styles.iconPhone} src={phone} alt="phone" />
          <a className={styles.phone} href="tel: +7 (966) 55 88 499">
            +7 (966) 55 88 499
          </a>
          <img className={styles.iconHeart} src={heart} alt="heart" />
          <img className={styles.iconCart} src={cart} alt="cart" />
        </div>
      </div>
    </div>
  )
}

export default Header
