// @import '../styles/media-queries.css';
import React from 'react'
import { device } from '../styles/MediaQueries'
import styled from 'styled-components'

const baseUnit = '17'

/* Font sizes */
const fontMicroSize = `calc(8 / ${baseUnit} * 1rem)`
const fontMicroLineHeight = '1'
const fontSmallSize = `calc(14 / ${baseUnit} * 1rem)`
const fontSmallLineHeight = 'calc(18 / 14)'
const fontBaseSize = `calc(${baseUnit} / 16 * 100%)`
const fontBaseLineHeight = `calc(22 / ${baseUnit})`
const fontLargeSize = `calc(19 / ${baseUnit} * 1rem)`
const fontLargeLineHeight = 'calc(24 / 19)'
const fontTitle3Size = `calc(24 / ${baseUnit} * 1rem)`
const fontTitle3LineHeight = 'calc(28 / 24)'
const fontTitle2Size = `calc(32 / ${baseUnit} * 1rem)`
const fontTitle2LineHeight = 'calc(36 / 32)'
const fontTitle1Size = `calc(44 / ${baseUnit} * 1rem)`
const fontTitle1LineHeight = 'calc(56 / 44)'

/*
 * Statically sized elements
 */

const title1 = `
  font-size: ${fontTitle1Size};
  line-height: ${fontTitle1LineHeight};
  `

const title2 = `
  font-size: ${fontTitle2Size};
  line-height: ${fontTitle2LineHeight};
`

const title3 =
  `font-size: ${fontTitle3Size};
  line-height: ${fontTitle3LineHeight};
  `

const large =
  `font-size: ${fontLargeSize};
  line-height: ${fontLargeLineHeight};`

const base =
  `font-size: ${fontBaseSize};
  line-height: ${fontBaseLineHeight};`

const small =
  `font-size: ${fontSmallSize};
  line-height: ${fontSmallLineHeight};`

const micro =
  `font-size: ${fontMicroSize};
  line-height: ${fontMicroLineHeight};
  text-transform: uppercase;`

/*
 * Responsively sized elements
 */

const paragraph = `
  ${base}
  margin: 0.5rem 0 1rem 0

  @media ${device.mediaMinSmall} {
    ${base}
  }

  @media ${device.mediaMinMedium} {
    ${large}
  }
`

const blockQuote = 'background: #eee;'

const responsiveTitle1 = `
  font-weight: 900;
  ${title3}
  margin: 1rem 0 2rem;

  @media ${device.mediaMinSmall} {
    ${title2}
  }

  @media ${device.mediaMinMedium} {
    ${title1}
  }
`

const responsiveTitle2 = `
  font-weight: 900;
  ${large}
  margin: 1.5rem 0 0.5rem;

  @media ${device.mediaMinSmall} {
    ${title3}
  }

  @media ${device.mediaMinMedium} {
    ${title2}
  }
`

const responsiveTitle3 = `
  font-weight: 900;
  ${large}
  margin: 1rem 0;

  @media ${device.mediaMinSmall} {
    ${large}
  }

  @media ${device.mediaMinMedium} {
    ${title3}
  }
`

const responsiveTitle4 = `
  ${base}
  margin: 1rem 0 0.5rem;

  @media ${device.mediaMinSmall} {
    ${base}
  }

  @media ${device.mediaMinMedium} {
    ${large}
  }
`

export const typography = {
  paragraph,
  title1,
  title2,
  title3,
  large,
  base,
  small,
  micro,
  blockQuote,
  responsiveTitle1,
  responsiveTitle2,
  responsiveTitle3,
  responsiveTitle4
}

const StyledParagraph = styled.p`
    ${typography.paragraph}
    margin-bottom: 1rem;
`
const StyledHeading1 = styled.h1`
    ${typography.responsiveTitle1}
    &.align-center {
      text-align: center;
    }
`
const StyledHeading2 = styled.h2`
    ${typography.responsiveTitle2}
`
const StyledHeading3 = styled.h3`
    ${typography.responsiveTitle3}
`
const StyledHeading4 = styled.h4`
    ${typography.responsiveTitle4}
`

const StyledSmallPrint = styled.p`
  ${typography.small}
  margin-bottom: 1rem;
  padding-left: 1rem;
`

export const Paragraph = React.forwardRef(({ className, children }, ref) => <StyledParagraph ref={ref} className={className}>{children}</StyledParagraph>)
export const Heading1 = React.forwardRef(({ className, children }, ref) => <StyledHeading1 ref={ref} className={className}>{children}</StyledHeading1>)
export const Heading2 = React.forwardRef(({ className, children }, ref) => <StyledHeading2 ref={ref} className={className}>{children}</StyledHeading2>)
export const Heading3 = React.forwardRef(({ className, children }, ref) => <StyledHeading3 ref={ref} className={className}>{children}</StyledHeading3>)
export const Heading4 = React.forwardRef(({ className, children }, ref) => <StyledHeading4 ref={ref} className={className}>{children}</StyledHeading4>)
export const SmallPrint = React.forwardRef(({ className, children }, ref) => <StyledSmallPrint ref={ref} className={className}>{children}</StyledSmallPrint>)
