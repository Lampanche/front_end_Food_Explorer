import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop";

import { FormEditRestaurant } from "../../components/common/FormEditRestaurant";

import { FooterMobile } from "../../components/mobile/FooterMobile";

import { FooterDesktop } from "../../components/desktop/FooterDesktop";

import { resizeWidth } from "../../utils/resize.js";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { useAuth } from "../../hooks/auth.jsx";

import { useState } from "react";

export function EditRestaurant()
{

  const { user }  = useAuth();

  const vwStart = window.innerWidth;

  const [ vwResized, setVwResized ] = useState(vwStart);

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  resizeWidth(setVwResized);

  const Header = toogleComponents(vwResized, HeaderMobile, HeaderDesktop);
  const Footer = toogleComponents(vwResized, FooterMobile, FooterDesktop);

  return(

    <Container>

      <Header isadmin={user.admin} setHamMenuActivePage={setActiveHamMenu} />

      {
        activeHamMenu ?

        <main>

          <HamMenu isadmin={user.admin} />

        </main>

        :

        <main>

          <FormEditRestaurant />

        </main>

      }

      <Footer/>

    </Container>

  )
}