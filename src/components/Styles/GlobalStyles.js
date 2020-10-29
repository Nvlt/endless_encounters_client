import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle `
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: all 0.50s linear;
  }
  .border {
    border: .2em solid ${({theme}) => theme.toggleBorder};
  }
  .viewport {
    background: ${({theme}) => theme.viewport};
    transition: all 0.50s linear;
  }
  .question {
    color: ${({theme}) => theme.text};
    transition: all 0.50s linear;
  }
`