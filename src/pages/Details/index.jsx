import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile/index.jsx";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop";

import { DetailsFoodMobile } from "../../components/mobile/DetailsFoodMobile";

import { DetailsFoodDesktop } from "../../components/desktop/DetailsFoodDesktop";

import { FooterMobile } from "../../components/mobile/FooterMobile";

import { FooterDesktop } from "../../components/desktop/FooterDesktop";

import { resizeWidth } from "../../utils/resize.js";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { useState } from "react";

export function Details()
{

  const vwStart = window.innerWidth

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  const [ vwResized, setVwResized ]  = useState(vwStart);

  resizeWidth(setVwResized)

  const Header = toogleComponents(vwResized, HeaderMobile, HeaderDesktop)
  const Details = toogleComponents(vwResized, DetailsFoodMobile, DetailsFoodDesktop)
  const Footer = toogleComponents(vwResized, FooterMobile, FooterDesktop)

  return(

    <Container>

      <Header isadmin={false} setHamMenuActivePage={setActiveHamMenu}/>

      <main>

        {
          activeHamMenu ?

          <HamMenu isadmin={false}/>

          :

          <Details isadmin={false}/>

        }

      </main>

      <Footer/>

    </Container>

  )
}