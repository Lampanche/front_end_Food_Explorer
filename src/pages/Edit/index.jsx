import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop";

import { FormEditFoodDesktop } from "../../components/desktop/FormEditFoodDesktop";

import { FormEditFoodMobile } from "../../components/mobile/FormEditFoodMobile/index.jsx";

import { FooterDesktop } from "../../components/desktop/FooterDesktop";

import { FooterMobile } from "../../components/mobile/FooterMobile";

import { resizeWidth } from "../../utils/resize.js";

import { toogleComponents } from "../../utils/toogleComponents.js"; 

import { useState } from "react";

export function Edit()
{

  const vwStart = window.innerWidth;

  const [ vwResized, setVwResized ]  = useState(vwStart);

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  resizeWidth(setVwResized);

  const Header = toogleComponents(vwResized, HeaderMobile, HeaderDesktop);
  const Form = toogleComponents(vwResized, FormEditFoodMobile, FormEditFoodDesktop);
  const Footer = toogleComponents(vwResized, FooterMobile, FooterDesktop);

  return(

    <Container>

      <Header isadmin={true} setHamMenuActivePage={setActiveHamMenu}/>

      {
        activeHamMenu ?

        <main>

          <HamMenu isadmin={true}/>

        </main>

        :

        <main>

          <Form/>

        </main>

      }


      <Footer/>

    </Container>

  )
}