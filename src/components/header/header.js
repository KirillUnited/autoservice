import * as React from "react"
import { Link } from "gatsby"
import HeaderWrapper from "./HeaderWrapper"
import HeaderMain from "./HeaderMain"
import HeaderMenu from "./HeaderMenu"

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <HeaderMain />
      <HeaderMenu />
    </HeaderWrapper>
  )
}

export default Header
