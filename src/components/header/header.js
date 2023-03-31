import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

const menu = {
  'Автосервис РиаМоторс': null,
  'Услуги': null,
  'Ремонт автомобилей': null,
  'Обслуживание юр. лиц': null,
  'Клиентам': {
    href: '/',
    submenu: [
      'Способы оплаты, рассрочка',
      'Гарантия',
      'Акции'
    ]
  },
  'Контакты': null
};

const Header = ({ siteTitle }) => {
  return (
    <header id="site-header" className="header" role="banner">
      <section className="relative">
        <div className="container flex flex-wrap justify-between">
          <div className="flex p-2 basis-full md:basis-1/2 gap-2 items-center justify-between">
            <div className="basis-[30%] lg:basis-[40%]">
              <img className="mb-0"
                src={logo}
                width={170}
                height={86}
                alt="Riamotors"
              />
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <strong className="font-semibold">ООО «РиаМоторс»</strong>
                <br />
                Станция технического обслуживания
              </p>
              <p className="text-secondary mb-0">
                <strong className="font-semibold"><em>Гарантия качества для Вас!</em></strong>
              </p>
            </div>
          </div>
          <div className="hidden basis-full md:basis-1/4 md:flex flex-col items-center justify-center p-2 gap-1">
            <button type="button" className="transition text-white bg-primary hover:bg-white hover:text-primary border-primary border-2 px-6 py-2 rounded-xl">Запись на ремонт</button>
            <p className="mb-0 font-semibold"><strong className="font-semibold">Пон. - Пят. 8.00 - 20.00</strong></p>
          </div>
          <div className="basis-full md:basis-1/4 flex flex-col md:items-end justify-center p-2 gap-1">
            <a className="font-semibold" href="tel:+375 29 372 63 65">+375 29 372 63 65</a>
            <a className="font-semibold" href="tel:+375 29 872 63 65">+375 29 872 63 65</a>
            <a className="font-semibold" href="viber://chat?number=%2B375293726365">Написать в Viber</a>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-primary to-[#0B7CAC]">
        <div className="container">
          <nav>
            <ul className="flex flex-wrap items-center justify-center p-2">
              {Object.entries(menu).map(([key, value], i) => {
                return (
                  <li className="relative">
                    <Link to={value?.href} className="text-white font-medium px-3 leading-8" key={key}>{key}</Link>
                    {
                      value?.submenu
                      &&
                      <ul class="flex flex-col absolute">
                        {value.submenu.map((item) => {
                          return <li>{item}</li>
                        })}
                      </ul>
                    }
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>
    </header>
  )
}

export default Header
