import { Container } from "./styles.js";

import iconAppMobile from "../../../assets/iconAppMobile.png";

export function TitleAppMobile()
{
  return(

    <Container>

      <img src={iconAppMobile} alt="Icone do app." />
      <h1>food explorer</h1>

    </Container>

  )
}