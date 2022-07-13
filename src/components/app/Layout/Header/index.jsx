import React from 'react'
import { mainMenu } from '../../../../libs/mainMenu'
import styles from './Header.module.scss'
// import { useState } from 'react'
import logo from '../../../../assets/images/logo.svg'
import down_arrow from '../../../../assets/images/down_arrow.svg'

const Header = () => {
  // const [click, setClick] = useState(false)
  // const list = () => {
  //   setClick(!click)
  // }

  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.menu}>
          {mainMenu.map((item, index) => {
            return (
              <ul key={index}>
                <li className={styles.item}>
                  {item.name}

                  {/*{item.children !== undefined && <img onMouseEnter={list} onMouseLeave={list} src={down_arrow} alt="arrow" />}*/}
                  {/*{click && item.children !== undefined && (*/}
                  {/*  <div>*/}
                  {/*    {item.children.map((item, index) => {*/}
                  {/*      return <li key={index}>{item.name}</li>*/}
                  {/*    })}*/}
                  {/*  </div>*/}
                  {/*)}*/}

                  {item.children !== undefined && <img className={styles.arrow} src={down_arrow} alt="arrow" />}
                  {item.children.map((item, index) => {
                    return (
                      <ul key={index}>
                        <li>{item.name}</li>
                      </ul>
                    )
                  })}
                </li>
              </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Header
