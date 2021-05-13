import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import styled from 'styled-components'
import { device } from '../styles/MediaQueries'
import { colors } from '../styles/Variables'
import { typography } from '../styles/Typography'

const StyledFooter = styled.footer`
background: ${colors.colorWhite};
/* background: linear-gradient( 0deg ,rgba(5,206,177,1) 0%,rgba(41,196,218,1) 100%); */
`
const FooterWrapper = styled.div`
  border-top: solid 1px ${colors.colorBlack};
  box-sizing: border-box;
  max-width: 1024px;
  padding: 1.5em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  ${typography.small}
  
  @media ${device.mediaMinMedium} {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
  }
  gap: 2rem;


  @media ${device.MediaMinSmall} {
    padding: 2em;
  }

  .catty {
    max-width: fit-content;
    display: block;
    margin: 0 auto 1rem auto;
  }
`

const CompanyAddress = styled.div`
  text-align: center;
  margin: 0 0 1rem;
`

const SiteInfo = styled.div`
  text-align: center;
  ${typography.small};
  width: 100%;
  grid-column: 1/-1;

  & a {
    color: black;
  }
`

const FooterNav = styled.ul`
  list-style: none;
  text-align: center;
  
  @media ${device.mediaMinMedium} {
    text-align: left;
  }

  li {
    text-align: center;
    @media ${device.mediaMinMedium} {
      text-align: left;
    }

    a {
        color: ${colors.colorBlack};
    }
  }
`

const Socials = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
@media ${device.mediaMinMedium} {
  justify-content: flex-end;
}
li {
  font-size: 24px;
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }
   svg {
    color: ${colors.colorBlack};
   }
}
`

const FooterLogo = styled.div` 
  text-align: center;
  @media ${device.mediaMinMedium} {
    text-align: left;
  }
`

const AppButton = styled.a`
  max-width: 120px;
  display: block;
  margin: 0 auto;
`

const Footer = ({ companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <StyledFooter>
    <FooterWrapper>

      {companyInfo && (
        <div>
          {/* <Logo /> */}
          <FooterLogo>{companyInfo.name}</FooterLogo>
          <FooterNav>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><Link to='/terms'>Terms</Link></li>
            <li><Link to='/privacy'>Privacy policy</Link></li>
            <li><Link to='/cookies-policy'>Cookies policy</Link></li>
          </FooterNav>

          {/* <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>} */}
        </div>
      )}
      <div>
        {/* <AppButton href='https://google.com' className='app-button-footer'>
            <StaticImage
              src='../assets/images/google-play-badge.png'
              alt='Download on Google Play Store'
              quality='100'
              fit='contain'
              placeholder='tracedSVG'
              className='google-play'
            />
          </AppButton>
          <AppButton href='https://apple.com' className='app-button-footer'>
            <StaticImage
              src='../assets/images/App_Store_Badge.png'
              alt='Download on App Store'
              quality='100'
              fit='contain'
              placeholder='tracedSVG'
              className='app-store'
            />
          </AppButton> */}

      </div>
      <div>
        <Socials>
          <li><a href='https://www.instagram.com/thenutrinurse/?hl=en' target='blank'><FaInstagram /></a></li>
          <li><a href='https://www.facebook.com/emilythenutrinurse/' target='blank'><FaFacebookSquare /></a></li>
        </Socials>

      </div>

      <SiteInfo>
          © {new Date().getFullYear()}, Zeal
      </SiteInfo>
    </FooterWrapper>
  </StyledFooter>
)

export default Footer
