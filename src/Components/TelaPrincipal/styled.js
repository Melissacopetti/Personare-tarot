import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(13, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  /* border: red solid 3px; */
  span:first-child {
  display: inline-block;
  min-width: 70px;
  text-align: left;
}
`;

export const AllCard = styled.div`
  width: 12vw;
  height: 38vh;
  margin: 40px 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
  text-align: center;
  :hover {

    transform: rotateY(180deg);
  }
`;

export const ImgCard = styled.img`
  display: flex;
  align-items: center;
  width: 12vw;
  height: 38vh;
`;

export const CardFront = styled.div`
  display: flex;
  position: absolute;
  width: 12vw;
  height: 38vh;
  backface-visibility: hidden;
`;
export const CardBack = styled.div`
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 12vw;
  height: 38vh;
  backface-visibility: hidden;
`;

export const ButtonCard = styled.button`
font-family: "Macondo", cursive;
 border: none;
 color:white;
 background:none;
 font-size:medium;
 cursor: pointer;
`