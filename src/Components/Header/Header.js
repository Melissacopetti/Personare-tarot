import React from "react";
import Header1 from "../../assets/Header1.png";
import { BoxButton, Button, ImgBorder } from "./headerStyle";

const Header = () => {
  return (
    <header>
      <div>
        <ImgBorder src={Header1} />
        <BoxButton>
          <Button>Embaralhar </Button>
          <Button>Significado</Button>
        </BoxButton>
      </div>
    </header>
  );
};

export default Header;
