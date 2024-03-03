import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { FormEditFoodMobile } from "../../components/mobile/FormEditFoodMobile/index.jsx";

import { Footer } from "../../components/mobile/Footer";

import { useState } from "react";

export function Edit()
{

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  return(

    <Container>

      <HeaderMobile isadmin={true} setHamMenuActivePage={setActiveHamMenu}/>

      {
        activeHamMenu ?

        <main>

          <HamMenu isadmin={true}/>

        </main>

        :

        <main>

          <FormEditFoodMobile />

        </main>

      }


      <Footer/>

    </Container>

  )
}