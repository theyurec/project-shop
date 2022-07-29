import React from 'react'
import cn from 'clsx'
import { mainMenu } from '../../../../libs/configs/mainMenu'
import styles from './Header.module.scss'
import logo from '../../../../assets/images/logo.svg'
import downArrow from '../../../../assets/images/down_arrow.svg'
import phone from '../../../../assets/images/icon-phone.svg'
import heart from '../../../../assets/images/icon-heart.svg'
import cart from '../../../../assets/images/icon-cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  const wrapper = cn('wrapper', styles.headerWrapper)
  return (
    <div className={styles.header}>
      <div className={wrapper}>
        <div className={styles.mainBlock}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.menu}>
            {mainMenu.map((item, index) => {
              return (
                <div key={index} className={styles.headerItem}>
                  <Link path="/">{item.name}</Link>
                  {!!item.children && <img className={styles.arrow} src={downArrow} alt="arrow" />}
                  {!!item.children && (
                    <>
                      <div className={styles.submenuList}>
                        {item.children.map((item, index) => {
                          return (
                            <>
                              <div className={styles.submenu} key={index}>
                                <a href="#">{item.name}</a>
                                <div className={styles.submenuLine}></div>
                              </div>
                            </>
                          )
                        })}
                        <a href="#">
                          <button className={styles.btnSubmenu}>Смотерть все</button>
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
