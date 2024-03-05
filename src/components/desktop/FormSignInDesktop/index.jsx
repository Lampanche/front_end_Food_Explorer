import { Container } from "./styles.js";

import { InputText } from "../../common/InputText";

import { Button } from "../../common/Button";

import { ButtonText } from "../../common/ButtonText";

import { FormTitle } from "../../desktop/FormTitle";

export function FormSignInDesktop()
{
  return(

    <Container>

      <form>

        <FormTitle title={"Faça login"}/>

        <InputText
          title={"Email"}
          idInput={"email"}
          nameInput={"email"}
          typeInput={"email"}
          gapContainerInput={"0.8rem"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />

        <InputText
          title={"Senha"}
          idInput={"password"}
          nameInput={"password"}
          typeInput={"password"}
          gapContainerInput={"0.8rem"}
          placeholder={"No mínimo 6 caracteres"}
        />

        <Button title={"Entrar"}/>

        <ButtonText title={"Criar uma conta"}/>

      </form>

    </Container>

  )
}