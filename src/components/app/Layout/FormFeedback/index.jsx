import React from 'react'
import styles from './formFeedback.module.scss'
import cn from 'clsx'

const FormFeedback = () => {
  const wrapper = cn('wrapper', styles.feedbackWrapper)
  return (
    <div className={styles.blockFeedback}>
      <div className={wrapper}>
        <div className={styles.feedback}>
          <h2 className={styles.title}>Мы Вам перезвоним</h2>
          <p className={styles.subtitle}>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Ваше имя" className={styles.fieldName} />
            <input type="email" placeholder="Ваш email" className={styles.fieldEmail} />
            <input type="submit" value="Отправить" className={styles.formBtn} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormFeedback
