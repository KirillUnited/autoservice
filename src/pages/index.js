import * as React from "react"
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getCustomCSSProp } from "../utils/getCustomCSSProp";

const theme = createTheme({
  palette: {
    primary: {
      main: getCustomCSSProp('--color-primary'),
    },
    secondary: {
      main: getCustomCSSProp('--color-secondary'),
    },
    text: {
      primary: getCustomCSSProp('--color-text'),
    }
  },
  typography: {
    fontFamily: [getCustomCSSProp('--font-primary')].join(','),
  }
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
