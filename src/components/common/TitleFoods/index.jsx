import { Container } from "./styles.js";


export function TitleFoods({title, size, weight})
{
  return(

    <Container to={"/details"} size = {size} weight = {weight}>

      {title}

    </Container>

  )
}