import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile/index.jsx";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop/index.jsx";

import { BannerMobile } from "../../components/mobile/BannerMobile";

import { BannerDesktop } from "../../components/desktop/BannerDesktop/index.jsx";

import { WrappedSectionsMobile } from "../../components/mobile/WrappedSectionsMobile/index.jsx";

import { WrappedSectionsDesktop } from "../../components/desktop/WrappedSectionsDesktop/index.jsx";

import { FooterMobile } from "../../components/mobile/FooterMobile/index.jsx";

import { FooterDesktop } from "../../components/desktop/FooterDesktop/index.jsx";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { resizeWidth } from "../../utils/resize.js";

import { useState, useEffect } from "react";


export function Home()
{ 

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  const [vwStart, setVwStart] = useState("");

  resizeWidth(setVwStart);

  const Header = toogleComponents(vwStart, HeaderMobile, HeaderDesktop);
  const WrappedSections = toogleComponents(vwStart, WrappedSectionsMobile, WrappedSectionsDesktop);
  const Footer = toogleComponents(vwStart, FooterMobile, FooterDesktop);
  const Banner = toogleComponents(vwStart, BannerMobile, BannerDesktop);

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

          <Banner/>

          <WrappedSections isadmin={false}/>

        </main>

      }

      <Footer/>

    </Container>

  )
}
