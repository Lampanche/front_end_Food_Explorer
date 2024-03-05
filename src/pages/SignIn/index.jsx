import { Container } from "./styles.js";

import { TitleApp } from "../../components/mobile/TitleApp";

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

  return(

    <Container>

      <main>

        <TitleApp />

        <FormSignIn />   

      </main>

    </Container>

  )
}