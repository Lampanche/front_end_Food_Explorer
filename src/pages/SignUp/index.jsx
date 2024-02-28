import { Container } from "./styles.js";

import { TitleApp } from "../../components/mobile/TitleApp";

import { FormSignUp } from "../../components/mobile/FormSignUp";


export function SignUp()
{
  return(

    <Container>

      <main>

        <TitleApp/>

        <FormSignUp/>

      </main>

    </Container>

  )
}