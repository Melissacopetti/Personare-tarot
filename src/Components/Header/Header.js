// import shuffle from "lodash.shuffle";
import React from "react";
import Header1 from "../../assets/Header1.png";

// import { cards } from "../listaCards";
import { BoxButton, Button, ImgBorder } from "./headerStyle";

const Header = () => {
  // const { states } = useContext(GlobalStateContext);
  // const [cardSide, setCardSide] = useState([true]);
//   const [ setName] = useState("");
//   const [ setImage] = useState("");
// const [ setSide] = useState(true)

//   const blendCards = () => {
//     setCardSide(!cardSide);
//   };
//   const [ setHandleShuffle] = useState([cards]);

//  const shuffleHandle =  () => {
//     setHandleShuffle({
//       data: generateData(),
//     });
//   };

  // const cardPosition = cards.map((item, index) => {
  //   return <p key={index}>{index}</p>;
  // });
  // let minItems = 10;
  // const generateData = (min, max) =>
  //   shuffle(cardPosition)
  //     .slice(
  //       0,
  //       minItems + Math.floor(Math.random() * (78 - minItems)),
  //       // setName(states.tarot.cards.name),
  //       // setImage(states.tarot.cards.image),
  //       // setSide(!false)
  //     )
  //     .sort();

  return (
    <header>
      <div>
        <ImgBorder src={Header1} />
        <BoxButton>
          <Button >Embaralhar </Button>
          <Button>Reiniciar</Button>
        </BoxButton>
      </div>
    </header>
  );
};

export default Header;
