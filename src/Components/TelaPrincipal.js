import React from 'react'
import { imageBackCard } from './baseUrlImg';
import Header from './Header/Header';
import { cards } from './listaCards';
import { AllCard, CardBack, CardFront, ContainerCard, ImgCard } from './styled';

const TelaPrincipal = () => {
  const [data, setData] = useState(generateData())
  const [responsive, setResponsive] = useState(false)
  const [duration, setDuration] = useState(800)
  const [stiffess, setStiffness]= useState(60)
  const [columns, setColumns]= useState(6)
  const [gutters, setGutters]= useState(13)
  const [easing, setEasing]= useState({easings.cubicOut})





    const items = cards.map((card) => {
        return (
            <div>
            <AllCard key={card.name}>
                <CardFront>
                <ImgCard src={imageBackCard}/>
                </CardFront>
                <CardBack>
                <ImgCard src={card.image} />
                <h3>{card.name.toUpperCase()}</h3>
                </CardBack>
            </AllCard>
     </div>   );
    });
    return (
        <div> 
            <Header/>
         
    <ContainerCard>
       
        {items}</ContainerCard>
</div>  )
}

export default TelaPrincipal