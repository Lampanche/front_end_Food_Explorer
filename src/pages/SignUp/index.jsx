import { Container } from "./styles.js";

import { TitleApp } from "../../components/mobile/TitleApp";

import { FormSignUpMobile } from "../../components/mobile/FormSignUpMobile";

import { FormSignUpDesktop } from "../../components/desktop/FormSignUpDesktop";

import { useState } from "react";

import { resizeWidth } from "../../utils/resize.js"

import { toogleComponents } from "../../utils/toogleComponents.js"

export function SignUp()
{

  const [vwStart, setVwStart] = useState("");

  resizeWidth(setVwStart);

  const FormSignUp = toogleComponents(vwStart, FormSignUpMobile, FormSignUpDesktop);

  return(

    <Container>

      <main>

        <TitleApp/>

        <FormSignUp/>

      </main>

    </Container>

  )
}