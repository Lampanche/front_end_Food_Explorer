import { Container } from "./styles.js";

import iconBtnFavorited from "../../../assets/iconBtnFavorited.svg";

export function BtnFavorited({unfavorite, leftPosition})
{
  return(

    <Container onClick={() => unfavorite(false)} leftPosition={leftPosition}>

      <img src={iconBtnFavorited} alt="Icone do botão de desfavoritar a comida." />

    </Container>

  )
}