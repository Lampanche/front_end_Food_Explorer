import { Container } from "./styles.js";

import iconAppDesktop from "../../../assets/iconAppDesk.png";

export function TitleAppDesktop()
{
  return(

    <Container>

      <img src={iconAppDesktop} alt="Icone do app." />
      <h1>food explorer</h1>

    </Container>

  )
}