import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

const Header = ({ siteTitle }) => {
  return (
    <header id="site-header" className="header" role="banner">
      <div className="container mx-auto max-w-6xl flex flex-wrap justify-between relative">
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
              <strong>ООО «РиаМоторс»</strong>
              <br/>
              Станция технического обслуживания
            </p>
            <p className="text-orange-500 mb-0">
              <strong><em>Гарантия качества для Вас!</em></strong>
            </p>
          </div>
        </div>
        <div className="hidden md:visible basis-full md:basis-1/4 md:flex flex-col items-center justify-center p-2">
          <button type="button" className="transition text-white bg-sky-600 hover:bg-white hover:text-sky-600 border-sky-600 border-2 px-6 py-3 mb-1">Запись на ремонт</button>
          <p className="mb-0 font-semibold"><strong>Пон. - Пят. 8.00 - 20.00</strong></p>
        </div>
        <div className="basis-full md:basis-1/4 flex flex-col md:items-end justify-center p-2">
          <a className="font-semibold mb-2 no-underline text-[#333]" href="tel:+375 29 372 63 65">+375 29 372 63 65</a>
          <a className="font-semibold mb-2 no-underline text-[#333]" href="tel:+375 29 872 63 65">+375 29 872 63 65</a>
          <a className="font-semibold no-underline text-[#333]" href="viber://chat?number=%2B375293726365">Написать в Viber</a>
        </div>
      </div>
    </header>
  )
}

export default Header
