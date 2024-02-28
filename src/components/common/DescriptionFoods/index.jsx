import { Container } from "./styles.js";


export function DescriptionFoods({title, size, weight})
{
  return(

    <Container size = {size} weight = {weight}>

      {title}

    </Container>

  )
}