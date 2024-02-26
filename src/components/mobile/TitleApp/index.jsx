import { Container } from "./styles.js";

import iconApp from "../../../assets/Polygon 3.png";

export function TitleApp()
{
  return(

    <Container>

      <img src={iconApp} alt="Icone do app." />
      <h1>food explorer</h1>

    </Container>

  )
}