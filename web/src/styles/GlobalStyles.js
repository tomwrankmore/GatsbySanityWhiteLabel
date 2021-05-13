import { createGlobalStyle } from 'styled-components'
// import font from '../assets/fonts/mabry-medium.woff'
import { typography } from '../styles/Typography'
import { colors } from '../styles/Variables'

const GlobalStyles = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
 }

 :root {
  --easing: cubic-bezier(0.5, 0.7, 0.4, 1);
 }

 body {
      -webkit-font-smoothing: antialiased;
      color: ${colors.colorBlack};
      margin: 0;
      font-family: 'Work Sans', sans-serif;
 }

 html, body, body > div, body > div > div {
      height: 100%;
    }


 fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  a {
    color: ${colors.colorBlack};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyles
