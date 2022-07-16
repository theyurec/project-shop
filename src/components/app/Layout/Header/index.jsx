import React from 'react'
import { mainMenu } from '../../../../libs/mainMenu'
import styles from './Header.module.scss'
import logo from '../../../../assets/images/logo.svg'
import down_arrow from '../../../../assets/images/down_arrow.svg'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.menu}>
          {mainMenu.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                {item.name}
                {!!item.children && <img className={styles.arrow} src={down_arrow} alt="arrow" />}
                {!!item.children && (
                  <>
                    <div className={styles.submenu_margin}></div>
                    <ul className={styles.submenu_list}>
                      {item.children.map((item, index) => {
                        return (
                          <>
                            <li className={styles.submenu} key={index}>
                              <a href="#">{item.name}</a>
                              <div className={styles.submenu_line}></div>
                            </li>
                          </>
                        )
                      })}
                      <button className={styles.btn_submenu}>Смотерть все</button>
                    </ul>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Header
