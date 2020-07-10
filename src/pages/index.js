import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const NopeContainer = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO title="Is There World Peace Yet?™" />

    <NopeContainer>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Nope
      </h1>
      <p>Looks like the world is still burning.</p>
    </NopeContainer>
  </Layout>
)

export default IndexPage
