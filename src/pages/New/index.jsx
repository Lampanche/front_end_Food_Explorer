import { Container } from "./styles.js";

import { FormNewFoodMobile } from "../../components/mobile/FormNewFoodMobile";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { Footer } from "../../components/mobile/Footer";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { useState } from "react";

export function New()
{

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  return(

    <Container>

      <HeaderMobile isadmin={true} setHamMenuActivePage={setActiveHamMenu}/>

      <main>

        {
          activeHamMenu ?
            
          <HamMenu />

          :

          <FormNewFoodMobile />

        }


      </main>

      <Footer/>

    </Container>

  )
}