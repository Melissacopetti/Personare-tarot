import React from "react";
import Header1 from "../../assets/Header1.png";
import { BoxButton, Button, Description, ImgBorder } from "./headerStyle";

const Header = (props) => {
  const buttonReload = () => {
    window.location.reload();
    return false;
  };

  return (
    <header>
      <div>
        <ImgBorder src={Header1} />
        <BoxButton>
          <Button onClick={props.shuffle}>Embaralhar</Button>
          <Button onClick={props.shuffle && buttonReload}>Reiniciar</Button>
        </BoxButton>
        <Description>
          Vamos tirar a sorte? Para jogar, clique em embaralhar. Passe o cursor
          pela carta escolhida e depois clique em seu nome, então terá seu
          significado. Não esqueça: as cartas nunca mentem!
        </Description>
      </div>
    </header>
  );
};

export default Header;
