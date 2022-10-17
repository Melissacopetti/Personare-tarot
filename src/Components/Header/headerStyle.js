import styled from "styled-components";

export const ImgBorder = styled.img`
  width: 100%;
  height: 250px;
  position: relative;
`;

export const BoxButton = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;
export const Button = styled.button`
  
  font-family: "Macondo", cursive;
  border: none;
  font-size: 4vw;
  height: 100px;
  width: 300px;
  margin-left: 15vw;
  margin-right: 17vw;
  margin-top: -150px;
  color: #d49c6c;
cursor: pointer;
  background: none;
  :hover{
    margin-top:50px;
  }
  :active{
color:white;
  }
`;

export const Description = styled.h2`
color:pink;
border:#d49c6c 9px double;
text-align:center;
padding:10px;
`