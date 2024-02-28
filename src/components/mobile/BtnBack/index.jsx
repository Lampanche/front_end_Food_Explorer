import { Container } from "./styles.js";

import iconBack from "../../../assets/CaretLeft.png";

export function BtnBack()
{
  return(

    <Container>

      <img src={iconBack} alt="Seta para a esquerda do botão de voltar"></img>
      <span>voltar</span>

    </Container>

  )
}