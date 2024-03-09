import { Container } from "./styles.js";

import mainImgHomeMobile from "../../../assets/mainImgHomeMobile.png";

export function BannerMobile()
{
  return(

    <Container>

      <img src={mainImgHomeMobile} alt="Imagem de alimentos."></img>

      <div className="wrappedText">

        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

      </div>

    </Container>

  )
}