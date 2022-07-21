import React from 'react'
import cn from 'clsx'
import { blockInfo } from '../../../../libs/blockInfo'
import styles from './Info.module.scss'
import cn from 'clsx'

const Info = () => {
  const wrapper = cn('wrapper', styles.blockInfoWrapper)
  return (
<<<<<<< HEAD
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
=======
      <div className={styles.blockInfo}>
          <div className={wrapper}>
            {blockInfo.map((item, index) => {
              return (
                <div key={index} className={styles.infoItem}>
                  <div className={styles.infoItemNumbers}>{item.numbers}</div>
                  <div className={styles.infoItemSuccess}>{item.success}</div>
                </div>
              )
            })}
          </div>
      </div>
>>>>>>> 8951bfe20e98139d621fca65460cc6aa21a5843f
  )
}

export default Info
