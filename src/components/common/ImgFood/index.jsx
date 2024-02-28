import { Container } from "./styles.js";

import imgFood from "../../../assets/Dish.png";

export function ImgFood({widthContainer, heightContainer})
{
  return(

    <Container width = {widthContainer} height = {heightContainer}>

      <img src={imgFood} alt="Imagem da refeição." />

    </Container>

  )
}