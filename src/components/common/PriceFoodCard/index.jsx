import { Container } from "./styles.js";


export function PriceFoodCard({title, fontSize})
{
  return(

    <Container fontSize={fontSize}>

      {title}

    </Container>


  )
}