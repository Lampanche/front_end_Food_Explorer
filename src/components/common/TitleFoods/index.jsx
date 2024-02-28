import { Container } from "./styles.js";



export function TitleFoods({title, size, weight})
{
  return(

    <Container size = {size} weight = {weight}>

      {title}

    </Container>

  )
}