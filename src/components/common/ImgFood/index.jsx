import { Container } from "./styles.js";

export function ImgFood({widthContainer, heightContainer, img})
{
  return(

    <Container width = {widthContainer} height = {heightContainer}>

      <img src={img} alt="Imagem da refeição." />

    </Container>

  )
}