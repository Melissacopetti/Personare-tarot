import styled from "styled-components";

export const ImgBorder = styled.img`
  width: 100%;
  height: 250px;
  position: relative;

`;

export const BoxButton = styled.div`
display:flex;
justify-content:space-evenly;

`;


export const Button = styled.button`
  font-family: "Macondo", cursive;
  border: none;
  font-size: 4vw;
  color: #d49c6c;
 
cursor: pointer; 
 background: none;
  :active{
color:white;
  }  
`

export const Description = styled.h2`
color:pink;
border:#d49c6c 9px double;
text-align:center;
padding:10px;
margin-top:50px; 
 
`