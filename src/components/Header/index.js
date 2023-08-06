import * as React from "react"
import { autoModels, menu } from "./data"
import * as styles from "./styles.module.scss"
import { OrderModal } from "../Modals";
import HeaderCarousel from "./HeaderCarousel";
import HeaderMenu from "./HeaderMenu";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => {
  return (
    <header id="site-header" className="header" role="banner">
      <section className="relative">
        <div className="container flex flex-wrap justify-between">
          <div className="flex py-2 basis-full md:basis-1/2 gap-2 items-center justify-between">
            <div className={styles.logo}>
              <StaticImage
                src="../../assets/images/logo.png"
                width={170}
                height={86}
                alt={siteTitle}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm mb-1">
                <strong className="font-semibold">ООО «РиаМоторс»</strong>
                <br />
                Станция технического обслуживания
              </p>
              <p className="text-sm text-secondary mb-0">
                <strong className="font-semibold"><em>Гарантия качества для Вас!</em></strong>
              </p>
            </div>
          </div>
          <div className={styles.cta}>
            <OrderModal />
            <p className="mb-0 font-semibold"><strong className="font-semibold">Пон. - Пят. 8.00 - 20.00</strong></p>
          </div>
          <div className={`${styles.contacts}`}>
            <a className="hover:text-secondary transition-colors" href="tel:+375 29 372 63 65">+375 29 372 63 65</a>
            <a className="hover:text-secondary transition-colors" href="tel:+375 29 872 63 65">+375 29 872 63 65</a>
            <a className="hover:text-secondary transition-colors" href="viber://chat?number=%2B375293726365">Написать в Viber</a>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-primary to-[#0B7CAC]">
        <div className="container">
          <HeaderMenu items={menu} />
        </div>
      </section>
      <section className="bg-[#F8F8F8]">
        <div className="container">
          <HeaderCarousel data={autoModels} />
        </div>
      </section>
    </header>
  )
}

export default Header
