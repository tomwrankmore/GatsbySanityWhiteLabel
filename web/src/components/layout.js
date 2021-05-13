import React from 'react'
import Header from './header'
import styled from 'styled-components'
import { device } from '../styles/MediaQueries'
import { typography } from '../styles/Typography'
import GlobalStyles from '../styles/GlobalStyles'

import '../styles/layout.css'
import { colors } from '../styles/Variables'
import Footer from './Footer'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.colorWhite};
  /* background: linear-gradient( 180deg ,rgba(5,206,177,1) 0%,rgba(41,196,218,1) 100%); */
`

const Content = styled.div`
  min-height: calc(100% - 73px - 152px);
  flex: 1 0 auto;

  @media ${device.mediaMinSmall} {
    min-height: calc(100% - 90px - 169px);
  }
`

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles />
    <Wrapper>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <Content>{children}</Content>
      <Footer companyInfo={companyInfo} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} siteTitle={siteTitle} />
    </Wrapper>
  </>
)

export default Layout
