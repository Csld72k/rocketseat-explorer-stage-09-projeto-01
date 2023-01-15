import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  :root {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
  }
  
  
`;