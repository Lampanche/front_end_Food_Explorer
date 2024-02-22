import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/Header/index.jsx";

import { HeaderDesktop } from "../../components/desktop/Header/index.jsx";

import { SectionFoods } from "../../components/mobile/SectionFoods";

import { Footer } from "../../components/common/Footer/index.jsx";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { resize } from "../../utils/resize.js";

import { useState, useEffect } from "react";

import mainImgHome from "../../assets/pngegg 2.png";

export function Home()
{
  const [vwStart, setVwStart] = useState("")

  resize(setVwStart)

  const Header = toogleComponents(vwStart, HeaderMobile, HeaderDesktop)
  
  return( 

    <Container>

      <Header isadmin = {false}/>

        
      <main>

        <div className="wrappedMainText">

          <img src={mainImgHome} alt="Imagem de alimentos."></img>

          <div className="wrappedText">

            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

          </div>

        </div>

        <div className="wrappedSections">

          <SectionFoods title={"Refeições"} isadmin={false}/>
          <SectionFoods title={"Pratos principais"} isadmin={false}/>
          <SectionFoods title={"Refeições"} isadmin={false}/>

        </div>

      </main>

      <Footer/>

    </Container>

  )
}
