import { Container } from "./styles.js";

import { InputText } from "../../common/InputText";

import { Button } from "../../common/Button";

import { ButtonText } from "../../common/ButtonText";

import { FormTitle } from "../../desktop/FormTitle";

import { useAuth } from "../../../hooks/auth.jsx";

import { useState } from "react";

export function FormSignInDesktop()
{ 

  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  const { signIn } = useAuth()

  const data = 
  {
    email : email,
    password: password
  }

  return(

    <Container>

      <form>

        <FormTitle title={"Faça login"}/>

        <InputText
          setEmail={setEmail}
          title={"Email"}
          idInput={"email"}
          nameInput={"email"}
          typeInput={"email"}
          gapContainerInput={"0.8rem"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />

        <InputText
          setPassword={setPassword}
          title={"Senha"}
          idInput={"password"}
          nameInput={"password"}
          typeInput={"password"}
          gapContainerInput={"0.8rem"}
          placeholder={"No mínimo 6 caracteres"}
        />

        <Button view={"signIn"}  data={data} title={"Entrar"}/>

        <ButtonText view={"signIn"} title={"Criar uma conta"}/>

      </form>

    </Container>

  )
}