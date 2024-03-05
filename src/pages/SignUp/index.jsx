import { Container } from "./styles.js";

import { TitleAppDesktop } from "../../components/desktop/TitleAppDesktop/index.jsx";

import { TitleAppMobile } from "../../components/mobile/TitleAppMobile/index.jsx";

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

  const TitleApp = toogleComponents(vwStart, TitleAppMobile, TitleAppDesktop);

  return(

    <Container>

      <main>

        <div className="wrappedTitleAndForm">

          <TitleApp/>

          <FormSignUp/>

        </div>

      </main>

    </Container>

  )
}