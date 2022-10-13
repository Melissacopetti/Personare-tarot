import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body,
#root,
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;

}


body {
    background-color: #020b14;
background-image: -webkit-linear-gradient(180deg, #020b14 1%, #53157f 35%, #6c0979 62%, #2f1d52 91%);
background-image: -moz-linear-gradient(180deg, #020b14 1%, #53157f 35%, #6c0979 62%, #2f1d52 91%);
background-image: -o-linear-gradient(180deg, #020b14 1%, #53157f 35%, #6c0979 62%, #2f1d52 91%);
background-image: linear-gradient(180deg, #020b14 1%, #53157f 35%, #6c0979 62%, #2f1d52 91%);
    background-position:100%;
}

`;
