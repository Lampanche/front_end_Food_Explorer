import { Container } from "./styles.js";

import { useState } from "react";

export function ControlFoodQuantity({imgMinus, imgPlus, fontSize, fontWeight})
{

  const [ count, setCount ] = useState(1)

  function handleClickMinus()
  {

    if(count == 1)
    {
      setCount(1)
      return
    }

    setCount(prevstate => prevstate-=1)

  }

  return(

    <Container fontSize={fontSize} fontWeight={fontWeight}>

      <button onClick={() => handleClickMinus()}>

        <img src={imgMinus} alt="Botão de diminuir a quantidade selecionada."></img>

      </button>

      <span>{String(count)}</span>

      <button onClick={() => setCount(prevstate => prevstate+=1)}>

        <img src={imgPlus} alt="Botão de aumentar a quantidade selecionada."></img>

      </button>

    </Container>

  )
}