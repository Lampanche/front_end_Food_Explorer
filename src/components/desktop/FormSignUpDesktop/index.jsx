import { Container } from "./styles.js";

import { InputText } from "../../common/InputText";

import { Button } from "../../common/Button";

import { ButtonText } from "../../common/ButtonText";

import { FormTitle } from "../../desktop/FormTitle";

export function FormSignUpDesktop()
{
  return(

    <Container>

      <form>

        <FormTitle title={"Crie sua conta"}/>

        <InputText
          title={"Seu nome"}
          idInput={"name"}
          nameInput={"name"}
          typeInput={"text"}
          gapContainerInput={"0.8rem"}
          placeholder={"Exemplo: Maria da Silva"}
        />

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

        <Button title={"Criar conta"}/>

        <ButtonText view={"signUp"} title={"Já tenho uma conta"}/>

      </form>
     
    </Container>

  )
}