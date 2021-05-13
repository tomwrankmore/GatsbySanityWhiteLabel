import { Link } from 'gatsby'
import React, { useRef, useEffect } from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'
import styled from 'styled-components'
import { device } from '../styles/MediaQueries'
import { Logo } from './Logo'
import { colors } from '../styles/Variables'

const StyledHeader = styled.div` 
  position: relative;
  z-index: 1000;
  height: 100%;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1em;
  display: flex;

  @media ${device.mediaMinSmall} {
    padding: 1.5em 1.5em;
  }
`

const Branding = styled.h1`
  font-size: inherit;
  margin: 0;
  flex: 1;

  a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const ToggleNavButton = styled.button` 
  appearance: none;
  font-size: 35px;
  border: none;
  background: none;
  margin: 0;
  padding: calc(14 / 17 / 2 * 1rem);
  outline: none;
  color: #000;
  cursor: pointer;
  height: fit-content;
  display: flex;
  
  & svg {
    display: block;
  }

  @media ${device.mediaMinMedium} {
    display: none;
    // hide after screen is bigger that small.
  }
`

const StyledNav = styled.nav`
  display: none;

  &.showNav {
    display: block;
  }

  & ul {
    margin: 0;
    padding: 0;
  }

  & ul li a {
    display: block;
    color: ${colors.colorBlack};
    text-decoration: none;
    position: relative;
    overflow: hidden;

    & :after {
      display: block;
      content: '';
      height: 2px;
      background-color: #222;
      position: absolute;
      bottom: 0;
      width: 100%;
      transform: translateX(-101%);
    }

    &.animate-out::after {
    transition: transform 0.3s var(--easing);
    transform: translateX(100%);
    }

    &.active {
      font-weight: bold;
    }
  }

  @media (hover: hover) {
    & ul li a:hover::after {
      /* text-decoration: underline; */
      transition: transform 0.3s var(--easing);
      transform: translateX(0);
    }
  }

  @media ${device.mediaMaxMedium} {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    top: 8rem;
    border-radius: 25px;
    margin: 0px 1.875rem;

    & ul {
      padding: 1rem 0;
    }

    & ul li {
      max-width: fit-content;
      margin: 0px auto;
      padding: 0.65rem 0px;
    }

    & ul li a {
      /* padding: 0.5rem 1.5rem; */
    }
  }

  @media ${device.mediaMinMedium} {
    display: flex;
    align-content: flex-end;

    &.showNav {
    display: flex;
    } 

    & ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    & ul li {
      padding: 0 0.5rem;
    }

    & ul li a {
      padding: 0 0 0.2rem 0;
    }
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  const revealRefs = useRef([])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const navItems = revealRefs.current

  navItems.forEach((link, i) => {
    link.addEventListener('mouseleave', e => {
      link.classList.add('animate-out')
    })
    link.addEventListener('click', e => {
      onHideNav()
    })
    link.ontransitionend = function () {
      link.classList.remove('animate-out')
    }
  })

  return (
    <StyledHeader>
      <Wrapper>
        <Branding>
          <Link to='/'>
            <Logo />
          </Link>
        </Branding>

        <ToggleNavButton
        // switches showNav variable between true and false
          onClick={showNav ? onHideNav : onShowNav}
        >
          {showNav ? <Icon symbol='cross' /> : <Icon symbol='hamburger' />}
        </ToggleNavButton>

        <StyledNav
          className={showNav && 'showNav'}
        >
          <ul>
            <li>
              <Link
                ref={addToRefs}
                to='/about/'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                ref={addToRefs}
                to='/projects/'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                ref={addToRefs}
                to='/blog/'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                ref={addToRefs}
                to='/contact/'
              >
                Contact
              </Link>
            </li>
          </ul>
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
