import * as React from "react"
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getCustomCSSProp } from "../utils/getCustomCSSProp";
import { HeroSection } from "../components/Hero";

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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 1024,
      lg: 1140,
      xl: 1440,
    },
  },
});
const FAKE_API = "https://graphqlzero.almansi.me/api";

const IndexPage = () => {
  const [post, setPost] = React.useState({});
  React.useEffect(() => {
    fetch(FAKE_API, {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify({
        query: `{
          post(id: 1) {
            id
            title
            body
          }
        }`
      })
    }).then(res => res.json()).then(res => setPost(res))
  }, [post])
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <HeroSection />
          <section className="container text-center py-10">
            <h1 className="text-4xl heading mb-5">{post.data?.post?.title}</h1>
            <p className="text-sm">{post.data?.post?.body}</p>
          </section>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Риа Моторс" />

export default IndexPage
