import { Container } from "./styles.js";

import { useNavigate } from "react-router-dom";

export function BtnBack({ imgBtnBack, weight, fontSize, alignSelf })
{

  const navigate = useNavigate()

  return(

    <Container onClick={() => navigate(-1)} weightSpan={weight} fontSize={fontSize} alignSelf={alignSelf}>

      <img src={imgBtnBack} alt="Icone do botão de voltar." ></img>
      <span>voltar</span>

    </Container>

  )
}