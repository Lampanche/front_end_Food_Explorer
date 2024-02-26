import { Container } from "./styles.js";

import { TitleApp } from "../../components/mobile/TitleApp";

import { InputText } from "../../components/common/InputText";

import { Button } from "../../components/common/Button";

import { ButtonText } from "../../components/common/ButtonText";


export function SignUp()
{
  return(

    <Container>

      <main>

        <TitleApp/>

        <form>

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

          <ButtonText title={"Já tenho uma conta"}/>

        </form>


      </main>

    </Container>

  )
}