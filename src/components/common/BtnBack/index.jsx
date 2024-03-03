import { Container } from "./styles.js";


export function BtnBack({ imgBtnBack, weight, fontSize, alignSelf })
{
  return(

    <Container weightSpan={weight} fontSize={fontSize} alignSelf={alignSelf}>

      <img src={imgBtnBack} alt="Icone do botão de voltar." ></img>
      <span>voltar</span>

    </Container>

  )
}