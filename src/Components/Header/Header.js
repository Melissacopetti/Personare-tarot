
import React from "react";
import Header1 from "../../assets/Header1.png";
import { cards } from "../listaCards";
import { BoxButton, Button, Description, ImgBorder } from "./headerStyle";

const Header = () => {


  const cardPosition = cards.map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  const shuffle= (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
const handleCards = shuffle(cardPosition);

  return (
    <header>
      <div>
        <ImgBorder src={Header1} />
        <BoxButton>
          <Button
            onClick={handleCards}
          >
           Embaralhar
          </Button>
          <Button >Reiniciar</Button>
        </BoxButton>
        <Description>
          Vamos tirar a sorte? Para jogar, clique em embaralhar. Passe o cursor
          pela carta escolhida e depois clique em seu nome, então terá seu
          significado Não esqueça: as cartas nunca mentem!
        </Description>
      </div>
    </header>
  );
};

export default Header;
