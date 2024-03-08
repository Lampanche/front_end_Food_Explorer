import { Container } from "./styles.js";

import favoriteDesktop from "../../../assets/favoriteDesktop.svg";

export function BtnFavorite({favorite, leftPosition})
{
  return(

    <Container onClick={() => favorite(true)} leftPosition={leftPosition}>

      <img src={favoriteDesktop} alt="Icone do botão de favoritar a comida." />

    </Container>

  )
}