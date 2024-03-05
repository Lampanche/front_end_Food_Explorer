import { Container } from "./styles.js";

import mainImgHomeDesktop from "../../../assets/mainImgHomeDesktop.png";

export function BannerDesktop()
{
  return(

    <Container>

      <img src={mainImgHomeDesktop} alt="Imagem de alimentos."></img>

      <div className="wrappedText">

        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

      </div>

    </Container>

  )
}