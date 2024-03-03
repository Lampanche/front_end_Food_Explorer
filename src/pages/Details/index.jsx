import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile/index.jsx";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { DetailsFoodMobile } from "../../components/mobile/DetailsFoodMobile";

import { Footer } from "../../components/mobile/Footer/";

import { useState } from "react";

export function Details()
{

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  return(

    <Container>

      <HeaderMobile isadmin={false} setHamMenuActivePage={setActiveHamMenu}/>

      <main>

        {
          activeHamMenu ?

          <HamMenu isadmin={false}/>

          :

          <DetailsFoodMobile isadmin={false}/>

        }

      </main>

      <Footer/>

    </Container>

  )
}