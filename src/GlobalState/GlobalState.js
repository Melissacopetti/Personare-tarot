import React from "react";
import { cards } from "../Components/listaCards";

const GlobalState = (props) => {
  const [tarot, setTarot] = useState([]);

  useEffect(() => {
    getInfos();
  }, []);

  const getInfos = () => {
    fetch(cards)
      .then((cards) => {
        setTarot(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cardFront = tarot.image;
  const cardBack = tarot.imageBackCard;

  const states = { tarot, responsive, columns };
  const setters = { setTarot, setLayout  };
  const requests = { getInfos };
  const data = { states, setters, requests, cardFront, cardBack };


  return (
    <GlobalStateContext.Provider value={data}>
    {props.children}
  </GlobalStateContext.Provider>
  )
  ;
};

export default GlobalState;
