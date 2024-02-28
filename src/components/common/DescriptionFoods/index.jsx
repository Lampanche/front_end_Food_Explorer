import { Container } from "./styles.js";


export function DescriptionFoods({title, size, weight, align})
{
  return(

    <Container size = {size} weight = {weight} align={align}>

      {title}

    </Container>

  )
}