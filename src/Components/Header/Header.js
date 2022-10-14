import React from "react";
import Header1 from "../../assets/Header1.png";
import { BoxButton, Button, ImgBorder } from "./headerStyle";

const Header = () => {
  const [handleShuffle, setHandleShuffle] = useState({data});
  // const [ card, setCard]= useState([data])

  handleShuffle = () => {
    setHandleShuffle({
        data: generateData(),
    });
};

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
