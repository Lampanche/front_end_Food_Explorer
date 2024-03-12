import { Container } from "./styles.js";

import { InputText } from "../../common/InputText";

import { Button } from "../../common/Button";

import { ButtonText } from "../../common/ButtonText";

export function FormSignUpMobile()
{
  return(

    <Container>

      <InputText
      typeInput={"text"} 
      title={"Seu nome"} 
      nameInput={"nome"} 
      idInput={"nome"} 
      placeholder={"Exemplo: Maria da Silva"} 
      gapContainerInput={"0.8rem"} 
      />

      <InputText
      typeInput={"email"} 
      title={"Email"} 
      nameInput={"Email"} 
      idInput={"Email"} 
      placeholder={"Exemplo: exemplo@exemplo.com.br"} 
      gapContainerInput={"0.8rem"} 
      />

      <InputText
      typeInput={"password"} 
      title={"Senha"} 
      nameInput={"Senha"} 
      idInput={"Senha"} 
      placeholder={"No mínimo 6 caracteres"} 
      gapContainerInput={"0.8rem"} 
      />


      <Button title={"Criar conta"}/>

      <ButtonText view={"signUp"} title={"Já tenho uma conta"}/>

    </Container>

  )
}
