import React from 'react'
import { mainMenu } from '../../../../libs/mainMenu'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.menu}>
          {mainMenu.map((item, id) => {
            return (
              <div className={styles.item} key={id}>
                {item.name}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Header
