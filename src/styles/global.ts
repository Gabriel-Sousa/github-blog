import { createGlobalStyle } from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'

export const GlobalStyle = createGlobalStyle`

html{
      @media (max-width: 1080px) {
        font-size : 93.75%; //15px
      }
      @media (max-width: 720px) {
        font-size : 87.5%; //14px
      }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :focus{
    outline: 0;
  }

  body{
    
    background: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: "Nunito sans", sans-serif;
    font-weight: 400;
    font-size: 1rem
  }

`
