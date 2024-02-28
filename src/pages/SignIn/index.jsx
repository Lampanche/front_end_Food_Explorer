import { Container } from "./styles.js";

import { TitleApp } from "../../components/mobile/TitleApp";

import { FormSignIn } from "../../components/mobile/FormSignIn";

export function SignIn()
{
  return(

    <Container>

      <main>

        <TitleApp/>

        <FormSignIn/>   

      </main>


    </Container>

  )
}