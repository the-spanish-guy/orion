import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background-color: #C9D0F8;
    color: #636AA2;
    -webkit-smoothing: antialiased !important
  }

  ul {
    list-style: none
  }
`;