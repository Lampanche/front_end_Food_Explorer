import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile/index.jsx";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop/index.jsx";

import { SectionFoods } from "../../components/mobile/SectionFoods";

import { Footer } from "../../components/mobile/Footer/index.jsx";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { resizeWidth } from "../../utils/resize.js";

import { useState, useEffect } from "react";

import mainImgHome from "../../assets/pngegg 2.png";


export function Home()
{ 

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  const [vwStart, setVwStart] = useState("");

  resizeWidth(setVwStart);

  const Header = toogleComponents(vwStart, HeaderMobile, HeaderDesktop);

  useEffect(() => {}, [activeHamMenu]);

  return( 

    <Container>

      <Header isadmin = {false} setHamMenuActivePage = {setActiveHamMenu}/>
        
      {
        activeHamMenu ?

        <main>

          <HamMenu isadmin={true}/>

        </main>

        :

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

      }

      <Footer/>

    </Container>

  )
}
