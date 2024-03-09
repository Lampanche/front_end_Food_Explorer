import { Container } from "./styles.js";

import mainImgHomeDesktop from "../../../assets/mainImgHomeDesktop.png";

import mainImgHomeDesktop1300px from "../../../assets/mainImgHomeDesktop_resized.png";

import { resizeWidth } from "../../../utils/resize.js";

import { useState } from "react";

export function BannerDesktop()
{

  const [vwStart, setVwStart] = useState("");

  resizeWidth(setVwStart);

  if(Number(vwStart) > 1300)
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
  else if(Number(vwStart) <= 1300)
  {
    return(

      <Container>

        <img src={mainImgHomeDesktop1300px} alt="Imagem de alimentos."></img>

        <div className="wrappedText">

          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

        </div>

      </Container>


    )
  }
}