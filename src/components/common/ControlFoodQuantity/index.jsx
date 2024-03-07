import { Container } from "./styles.js";


export function ControlFoodQuantity({imgMinus, imgPlus, fontSize, fontWeight})
{
  return(

    <Container fontSize={fontSize} fontWeight={fontWeight}>

      <button>

        <img src={imgMinus} alt="Botão de diminuir a quantidade selecionada."></img>

      </button>

      <span>01</span>

      <button>

        <img src={imgPlus} alt="Botão de aumentar a quantidade selecionada."></img>

      </button>

    </Container>

  )
}