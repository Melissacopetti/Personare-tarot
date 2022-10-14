import React, { useState } from "react";
import Header1 from "../../assets/Header1.png";
import { cards } from "../listaCards";
import { BoxButton, Button, ImgBorder } from "./headerStyle";

import { Slider } from "@material-ui/core";


const Header = () => {
  const [handleShuffle, setHandleShuffle] = useState([cards]);

  const [data, setData] = useState(generateData());
 
  handleShuffle = () => {
    setHandleShuffle({
        data: generateData(),
    });
};
const cardPosition = cards.map((item, index) => {
  <p key={index}>{item}</p>;
});

const SliderWithTooltip = setSliderWithTooltip(Slider);
  const cartas = cards;
  generateData = () => shuffle(cardPosition);
  const minItems = (78)
    .slice(0, minItems + Math.floor(Math.random() * (26 - minItems)))
    .sort();

  return (
    <header>
      <div>
        <ImgBorder src={Header1} />
        <BoxButton>
     
          <Button  onClick={() => setHandleShuffle}>Embaralhar </Button>
          <Button>Significado</Button>
        </BoxButton>
      </div>
    </header>
  );
};

export default Header;
