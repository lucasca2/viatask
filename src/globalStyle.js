import { createGlobalStyle } from 'styled-components';
import 'typeface-poppins';
import styles from 'styles';

export default createGlobalStyle`
  @font-face {
    font-family: "Poppins", sans-serif;
    font-size: ${styles.fonts.sizes.medium};
    src: url("https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap")
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  input, button, a {
    outline: none;
  }
  
  button, a {
    cursor: pointer;
  }
  
  html, body, #root {
    min-height: 100%;
  }
  
  body {
    background-color: ${styles.colors.background};
    color: ${styles.colors.default.text};
  }
  
  body, input, button {
    font-family: "Poppins", Helvetica, sans-serif;
    font-size: 14px;
  }
  
  a {
    text-decoration: none;
    color: ${styles.colors.default.black};
  }
  
  ::-webkit-input-placeholder {
   color: ${styles.colors.placeholder};
  }
  
  :-moz-placeholder { /* Firefox 18- */
     color: ${styles.colors.placeholder};  
  }
  
  ::-moz-placeholder {  /* Firefox 19+ */
     color: ${styles.colors.placeholder};  
  }
  
  :-ms-input-placeholder {  
     color: ${styles.colors.placeholder};  
  }
`;
