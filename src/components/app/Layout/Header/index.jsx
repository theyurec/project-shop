import React from 'react'
import { mainMenu } from '../../../../libs/mainMenu'
import styles from './Header.module.scss'
import logo from '../../../../assets/images/logo.svg'
import downArrow from '../../../../assets/images/down_arrow.svg'
import phone from '../../../../assets/images/icon-phone.svg'
import heart from '../../../../assets/images/icon-heart.svg'
import cart from '../../../../assets/images/icon-cart.svg'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.mainBlock}>
            <ul className={styles.menu}>
              {mainMenu.map((item, index) => {
                return (
                  <li key={index} className={styles.headerItem}>
                    {item.name}
                    {!!item.children && <img className={styles.arrow} src={downArrow} alt="arrow" />}
                    {!!item.children && (
                      <>
                        <div className={styles.submenuMargin}></div>
                        <ul className={styles.submenuList}>
                          {item.children.map((item, index) => {
                            return (
                              <>
                                <li className={styles.submenu} key={index}>
                                  <a href="#">{item.name}</a>
                                  <div className={styles.submenuLine}></div>
                                </li>
                              </>
                            )
                          })}
                          <a href="#">
                            <button className={styles.btnSubmenu}>Смотерть все</button>
                          </a>
                        </ul>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
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
      </div>
    </>
  )
}

export default Header
