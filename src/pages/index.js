import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Is There World Peace Yet?™" />
    <h1
      style={{
        textShadow: ".25rem .25rem #890000",
      }}
    >
      Nope
    </h1>
  </Layout>
)

export default IndexPage
