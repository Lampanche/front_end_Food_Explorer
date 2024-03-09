import { Container } from "./styles.js";

import mainImgHomeMobile from "../../../assets/mainImgHomeMobile.png";

import mainImgHomeMobile_resized from "../../../assets/mainImgHomeMobile_resized.png";

import {resizeWidth} from "../../../utils/resize.js";

import { useState } from "react";

export function BannerMobile()
{

  const vwStart = window.innerWidth 

  const [ vwResized, setVwResized ] = useState(vwStart);

  resizeWidth(setVwResized)

  if(Number(vwResized) < 760)
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
  else if(Number(vwResized) >= 760)
  {
    return(
  
      <Container>
  
        <img src={mainImgHomeMobile_resized} alt="Imagem de alimentos."></img>
  
        <div className="wrappedText">
  
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
  
        </div>
  
      </Container>
  
    )
  }


}