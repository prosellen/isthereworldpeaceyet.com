/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  body, html { max-height: 100vh; overflow: hidden;margin: 0;}
  body {
    background: #c42929;
    background: linear-gradient(to bottom, #c42929 0%,#890000 100%);
    font-family: 'Open Sans', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
  }
  h1 {
    font-size: 9rem;
    margin: .5rem 0;
    text-align: center;
  }
  p {
    font-size: .8rem;
    text-align: center;
  }
`

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StickyFooter = styled(Footer)`
  flex-shrink: 0;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Site>
      <GlobalStyle />
      <Main>
        <div>{children}</div>
      </Main>
      <StickyFooter />
    </Site>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
