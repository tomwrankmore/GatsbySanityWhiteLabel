import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/MediaQueries'

const StyledContainer = styled.div`
    box-sizing: border-box;
    max-width: 1024px;
    padding: 1.5em;
    margin: 0 auto;
    background-color: var(--zeal-gradient);

    @media ${device.mediaMinSmall} {
      padding: 2em;
    }
`

const Container = React.forwardRef(({ children }, ref) => {
  return <StyledContainer ref={ref}>{children}</StyledContainer>
})

export default Container
