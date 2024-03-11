import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop";

import { FormNewFoodMobile } from "../../components/mobile/FormNewFoodMobile";

import { FormNewFoodDesktop } from "../../components/desktop/FormNewFoodDesktop/index.jsx";

import { FooterMobile } from "../../components/mobile/FooterMobile";

import { FooterDesktop } from "../../components/desktop/FooterDesktop";

import { resizeWidth } from "../../utils/resize.js";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { useState } from "react";

export function New()
{

  const vwStart = window.innerWidth;

  const [ vwResized, setVwResized ] = useState(vwStart);

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  resizeWidth(setVwResized);

  const Header = toogleComponents(vwResized, HeaderMobile, HeaderDesktop);
  const Form = toogleComponents(vwResized, FormNewFoodMobile, FormNewFoodDesktop);
  const Footer = toogleComponents(vwResized, FooterMobile, FooterDesktop);

  return(

    <Container>

      <Header isadmin={true} setHamMenuActivePage={setActiveHamMenu}/>

      <main>

        {
          activeHamMenu ?
            
          <HamMenu />

          :

          <Form/>

        }


      </main>

      <Footer/>

    </Container>

  )
}