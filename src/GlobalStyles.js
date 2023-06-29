import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Manrope:wght@400&display=swap');

  body {
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.davysGray};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .heading-small {
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
  }
`;

export default GlobalStyle;
