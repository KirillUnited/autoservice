/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as style from "./layout.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`${style.wrapper}`}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className={`${style.content}`}>{children}</main>
    </div>
  )
}

export default Layout
