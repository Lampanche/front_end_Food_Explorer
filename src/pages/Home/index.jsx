import { Container } from "./styles.js";

import { Header_mobile } from "../../components/mobile/Header/index.jsx";

import { Header_desktop } from "../../components/desktop/Header/index.jsx";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { resize } from "../../utils/resize.js";

import { useState, useEffect } from "react";

import mainImgHome from "../../assets/pngegg 2.png";

export function Home()
{
  const [vwStart, setVwStart] = useState("")

  resize(setVwStart)

  const Header = toogleComponents(vwStart, Header_mobile, Header_desktop)
  
  return( 

    <Container>

      <Header isadmin = {false}/>

      <div className="wrappedMainText">

        <img src={mainImgHome} alt="Imagem de alimentos."></img>

        <div className="wrappedText">

          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

        </div>

      </div>

    </Container>

  )
}
