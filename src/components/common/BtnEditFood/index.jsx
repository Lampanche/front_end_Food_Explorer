import { Container } from "./styles.js";

import btnEditFood from "../../../assets/Pencil.png";

export function BtnEditFood({leftPosition})
{
  return(

    <Container to={"/edit"} leftPosition={leftPosition}>

      <img src={btnEditFood} alt="Icone do botão de favoritar a comida." />

    </Container>

  )
}