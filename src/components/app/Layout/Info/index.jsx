import React from 'react'
import { blockInfo } from '../../../../libs/blockInfo'
import styles from './Info.module.scss'

const Info = () => {
  return (
    <>
      <div className={styles.blockInfo}>
        <div className={styles.blockInfoWrapper1}>
          <div className={styles.blockInfoWrapper}>
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
      </div>
    </>
  )
}

export default Info
