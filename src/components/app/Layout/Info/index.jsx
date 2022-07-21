import React from 'react'
import { blockInfo } from '../../../../libs/blockInfo'
import styles from './Info.module.scss'
import cn from 'clsx'

const Info = () => {
  const wrapper = cn('wrapper', styles.blockInfoWrapper)
  return (
    <div className={styles.blockInfo}>
      <div className={wrapper}>
        {blockInfo.map((item, index) => {
          return (
            <div key={index} className={styles.infoItem}>
              <div className={styles.infoText}>{item.count}</div>
              <div className={styles.infoAbout}>{item.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Info
