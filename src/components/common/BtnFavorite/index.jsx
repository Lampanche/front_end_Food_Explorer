import { Container } from "./styles.js";

import favoriteDesktop from "../../../assets/favoriteDesktop.svg";

export function BtnFavorite({leftPosition})
{
  return(

    <Container leftPosition={leftPosition}>

      <img src={favoriteDesktop} alt="Icone do botão de favoritar a comida." />

    </Container>

  )
}