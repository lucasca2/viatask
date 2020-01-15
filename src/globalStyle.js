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
  
  input, button, a, textarea {
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
  
  body, input, button, textarea {
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
  
  [data-tooltip] {
    display: inline-block;
    position: relative;
    
    &::after {
      pointer-events: none;
      padding: 10px 15px;
      text-align: center;
      content: attr(data-tooltip);
      font-size: 12px;
      line-height: 18px;
      position: absolute;
      background: #272727;
      border-radius: 4px;
      color: #fff;
      white-space: pre; /* or pre-wrap */
      opacity: 0;
      visibility: hidden;
      transition: opacity .2s, visibility .2s;
      will-change: opacity, visibility;
    }
    
    &::before {
      content: '';
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      transform: translateX(-50%) scale(1);
      left: 50%;
      opacity: 0;
      visibility: hidden;
      transition: opacity .2s, visibility .2s;
      will-change: opacity, visibility;
    }
    
    &:hover::after,
    &:hover::before {
      opacity: 1;
      visibility: visible;
    }
  }
  
  [data-position="top"]::after {
    transform: translateX(-50%) scale(1);
    left: 50%;
    bottom: calc(100% + 8px);
  }
  
  [data-position="top"]::before {
    border-top: 8px solid #272727;
    bottom: 100%;
  }
  
  [data-position="bottom"]::after{
    transform: translateX(-50%) scale(1);
    left: 50%;
    top: calc(100% + 8px);
  }
  
  [data-position="bottom"]::before {
    border-bottom: 8px solid #272727;
    top: 100%;    
  }
`;
