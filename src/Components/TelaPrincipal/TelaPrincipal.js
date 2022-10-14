import React from "react";
import { imageBackCard } from "../baseUrlImg";
import Header from "../Header/Header";
import { cards } from "../listaCards";
import { AllCard, CardBack, CardFront, ContainerCard, ImgCard } from "./styled";
import Grid from "./Grid";
import { layout } from "react-stonecutter";

const TelaPrincipal = () => {
    const { data, ...gridProps } = this.state;

  const cardPosition = cards.map((item, index) => {
    <p key={index}>{item}</p>;
  });

  const layouts = ["Simple"];
  const enterExitStyles = ["Newspaper"];

  
  const items = cards.map((card) => {
    const contentIndex = cardPosition(0) % 6;
    const content = { card }(contentIndex, Math.floor(contentIndex * 1.5) + 1);

    return (
      <div>
        <AllCard key={card.name}>
          <CardFront>
            <ImgCard src={imageBackCard} />
          </CardFront>
          <CardBack>
            <ImgCard src={card.image} />
            <h3>{card.name.toUpperCase()}</h3>
            {content.map((p, i) => {
              <p key={i}>{p}</p>;
            })}
          </CardBack>
        </AllCard>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <Grid
       
        measured={layout !== "simple"}
        {...gridProps}
      >
        <ContainerCard>{items}</ContainerCard>
      </Grid>
    </div>
  );
};

export default TelaPrincipal;
