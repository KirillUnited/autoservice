import * as React from "react"
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material";
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const theme = createTheme({
  palette: {
    primary: {
      main: window.getComputedStyle(document.body).getPropertyValue('--color-primary'),
    },
    secondary: {
      main: window.getComputedStyle(document.body).getPropertyValue('--color-secondary'),
    },
  },
});
const IndexPage = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Layout>
        CONTENT
      </Layout>
    </ThemeProvider>
  </StyledEngineProvider>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Риа Моторс" />

export default IndexPage
