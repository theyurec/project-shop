import React from 'react'
import { mainMenu } from '../../../../libs/mainMenu'
import styles from './Header.module.scss'

const Header = () => {
  return <div className={styles.green}>{mainMenu.map((item) => item.name)}</div>
}

export default Header
