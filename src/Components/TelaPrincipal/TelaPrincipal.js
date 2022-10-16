import React from "react";
import { imageBackCard } from "../baseUrlImg";
import Header from "../Header/Header";
import { cards } from "../listaCards";
import { AllCard, CardBack, CardFront, ContainerCard, ImgCard } from "./styled";
// import { SpringGrid } from "react-stonecutter";
import Swal from "sweetalert2";


const TelaPrincipal = () => {
  // const { states, cardFront, setLayout, responsive, columns } =
  //   useContext(GlobalStateContext);
  // const [side] = useState(false);
  // const tarot = states.tarot;
  // let Grid = SpringGrid;

  const items = cards.map((card) => {
        const title = card.name;
        const text = card.meaning;
    return (
          <div>
            <AllCard key={card.name}>
               
                <CardFront>
                  <ImgCard src={imageBackCard} />
                </CardFront>
            
                <CardBack>
                  <ImgCard  src={ card.image} />
                  <h3 onClick={
                    Swal.fire({
                      title: title,
                      text: text,
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })} 
                  >{card.name.toUpperCase()}</h3>
                </CardBack>
            
            </AllCard>
          </div>
        );
      })
   

  return (
    <div>
      <Header />
      {/* <Grid
        // columns={!responsive ? columns : null}
        // columnWidth={150}
        // easing={easings.cubicOut}
        // measured={setLayout === "simple"}
      > */}
        <ContainerCard>{items}</ContainerCard>
    
    </div>
  );
};

export default TelaPrincipal;
