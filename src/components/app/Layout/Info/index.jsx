import React from 'react'
import { blockInfo } from '../../../../libs/blockInfo'
import styles from './Info.module.scss'

const Info = () => {
  return (
    <>
      <div className={styles.block_info}>
        {blockInfo.map((item, index) => {
          return (
            <div key={index} className={styles.info_item}>
              <div className={styles.info_item_numbers}>{item.numbers}</div>
              <div className={styles.info_item_success}>{item.success}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Info
