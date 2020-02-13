import React from "react"
import PropTypes from "prop-types"

import { Global } from "@emotion/core"

import { globalStyles } from "../styles/globalStyles.js"

import Header from "./Header"
import RedesSociais from "./RedesSociais"

import Image from "./Imagem"
import Footer from "./Footer"
import { Content, Wrapper, Info } from "./Layout/styles"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Image />
      <Content>
        <Wrapper>{children}</Wrapper>
        <Global styles={globalStyles} />
      </Content>
      <RedesSociais />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
