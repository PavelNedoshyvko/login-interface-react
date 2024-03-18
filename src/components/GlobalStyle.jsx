import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import BasisGrotesqueProRegularWoff2 from "/fonts/BasisGrotesquePro-Regular.woff2";
import BasisGrotesqueProRegularWoff from "/fonts/BasisGrotesquePro-Regular.woff";
import BasisGrotesqueProMediumWoff2 from "/fonts/BasisGrotesquePro-Medium.woff2";
import BasisGrotesqueProMediumWoff from "/fonts/BasisGrotesquePro-Medium.woff";
import BasisGrotesqueProBoldWoff2 from "/fonts/BasisGrotesquePro-Bold.woff2";
import BasisGrotesqueProBoldWoff from "/fonts/BasisGrotesquePro-Bold.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Basis Grotesque Pro';
    src: url(${BasisGrotesqueProRegularWoff2}) format('woff2'), 
         url(${BasisGrotesqueProRegularWoff}) format('woff');
    font-weight: 400;
		font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: 'Basis Grotesque Pro';
    src: url(${BasisGrotesqueProMediumWoff2}) format('woff2'), 
         url(${BasisGrotesqueProMediumWoff}) format('woff');
    font-weight: 500;
		font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: 'Basis Grotesque Pro';
    src: url(${BasisGrotesqueProBoldWoff2}) format('woff2'), 
         url(${BasisGrotesqueProBoldWoff}) format('woff');
    font-weight: 700;
		font-display: swap;
    font-style: normal;
}

body {
	padding-top: 180px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Basis Grotesque Pro','Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* p:last-child {
  margin-bottom: 0;
} */

ul {
  margin: 0;
	padding: 0;
	list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
	padding: 0;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
