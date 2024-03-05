import { Container } from "./styles.js";

import { TitleAppDesktop } from "../../components/desktop/TitleAppDesktop/index.jsx";

import { TitleAppMobile } from "../../components/mobile/TitleAppMobile/index.jsx";

import { FormSignInMobile } from "../../components/mobile/FormSignInMobile";

import { FormSignInDesktop } from "../../components/desktop/FormSignInDesktop/index.jsx";

import { useState } from "react";

import { resizeWidth } from "../../utils/resize.js"

import { toogleComponents } from "../../utils/toogleComponents.js"

export function SignIn()
{

  const [vwStart, setVwStart] = useState("");

  resizeWidth(setVwStart);

  const FormSignIn = toogleComponents(vwStart, FormSignInMobile, FormSignInDesktop);

  const TitleApp = toogleComponents(vwStart, TitleAppMobile, TitleAppDesktop);

  return(

    <Container>

      <main>

        <div className="wrappedTitleAndForm">

          <TitleApp />

          <div>
            
            <FormSignIn />

          </div>   

        </div>

      </main>

    </Container>

  )
}