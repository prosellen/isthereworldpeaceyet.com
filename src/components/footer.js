import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterBar = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.7rem;
  padding: 0.25rem;
  opacity: 0.5;
`

const MadeWith = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
`

const Acknowledgement = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Footer = () => (
  <FooterBar>
    <MadeWith className={`madeWith`}>
      © {new Date().getFullYear()} (╯°□°）╯︵ ┻━┻)
    </MadeWith>
    <Acknowledgement className={`acknowledgement`}>
      <p style={{ margin: 0 }}>
        Favicon by{" "}
        <StyledLink to="http://www.freepik.com/" title="Freepik">
          freepik.com
        </StyledLink>
      </p>
    </Acknowledgement>
  </FooterBar>
)

export default Footer
