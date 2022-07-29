import React from 'react'
import cn from 'clsx'
import { Link } from 'react-router-dom'
import { menuFooterLeft } from '../../../../libs/configs/menuFooterLeft'
import { menuFooterRight } from '../../../../libs/configs/menuFooterRight'
import styles from './Footer.module.scss'
import logo_footer from '../../../../assets/images/logo_footer.svg'
import icon_vk from '../../../../assets/images/icon_social_vk.svg'
import icon_twitter from '../../../../assets/images/icon_social_twitter.svg'
import icon_facebook from '../../../../assets/images/icon_social_facebook.svg'

const Footer = () => {
  const wrapper = cn('wrapper', styles.footerWrapper)
  return (
    <div className={styles.footer}>
      <div className={wrapper}>
        <div className={styles.logoSocial}>
          <img src={logo_footer} alt="logo" className={styles.logoFooter} />
          <div className={styles.socialMedia}>
            <img src={icon_vk} alt="logo" className={styles.iconVk} />
            <img src={icon_twitter} alt="logo" className={styles.iconTwitter} />
            <img src={icon_facebook} alt="logo" className={styles.iconFacebook} />
          </div>
        </div>
        <div className={styles.footerInformation}>
          <div className={styles.footerInformationItem}>
            <h2 className={styles.footerTitle}>Навигация</h2>
            {menuFooterLeft.map((item, index) => {
              return (
                <div key={index} className={styles.navigationItem}>
                  <Link className={styles.linkFooter} to={item.link}>
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={styles.footerInformationItem}>
            <h2 className={styles.footerTitle}>Наши контакты</h2>
            <p className={styles.footerPhone}>Телефоны</p>
            <p>+7 (988) 565 00 38</p>
            <p>+375 33 662 82 56</p>
            <p className={styles.footerEmail}>Email</p>
            <p>vladpertcev@mail.ru</p>
            <p>korobko416@gmail.com</p>
          </div>
          <div className={styles.footerInformationItem}>
            <h2 className={styles.footerTitle}>Наш адрес</h2>
            <p>
              Россия,
              <br /> Ростов-на-Дону ул. <br /> Богачева, 16.
            </p>
          </div>
          <div className={styles.footerInformationItem}>
            <h2 className={styles.footerTitle}>Информация</h2>
            {menuFooterRight.map((item, index) => {
              return (
                <div key={index} className={styles.navigationItem}>
                  <Link className={styles.linkFooter} to={item.link}>
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerLine}></div>
      <p className={styles.copyright}>© 2021 Golden Soft All rights reserved.</p>
    </div>
  )
}

export default Footer
