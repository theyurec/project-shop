import React from 'react'
import cn from 'clsx'
import { blockInfo } from '../../../../libs/blockInfo'
import styles from './Info.module.scss'

const Info = () => {
  const wrapper = cn('wrapper', styles.blockInfoWrapper)
  return (
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
  )
}

export default Info
