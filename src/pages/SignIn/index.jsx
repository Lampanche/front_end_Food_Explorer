import { Container } from "./styles.js";

import { TitleApp } from "../../components/mobile/TitleApp";

import { InputText } from "../../components/common/InputText";

import { Button } from "../../components/common/Button";

import { ButtonText } from "../../components/common/ButtonText";


export function SignIn()
{
  return(

    <Container>

      <main>

        <TitleApp/>

        <form>

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

          <Button title={"Entrar"}/>

          <ButtonText title={"Criar uma conta"}/>

        </form>


      </main>


    </Container>

  )
}