import { Container } from "./styles.js";

import { InputText } from "../../common/InputText";

import { Button } from "../../common/Button";

import { ButtonText } from "../../common/ButtonText";

import { Toaster, toast } from "react-hot-toast";

import { AxiosError } from "axios";

import { useState, useEffect } from "react";

export function FormSignUpMobile()
{

  const [ name , setName] = useState("");
  const [ email , setEmail] = useState("");
  const [ password , setPassword] = useState("");
  const [ response, setResponse ] = useState(null);

  const data = 
  {
    name : name,
    email: email,
    password: password
  }

  function modal()
  {
    if(response != null)
    {
      if(response instanceof AxiosError)
      {
        toast.error(`${response.response.data.message}`)
        return
      }
      
      toast.success(`${response.data.message}`)

      setEmail("")
      setPassword("")
      setName("")

    }
  }

  useEffect(() => {

    modal()

  }, [response])


  return(

    <Container>

      <Toaster />

      <InputText
        nameValue={name}
        setName={setName}
        typeInput={"text"} 
        title={"Seu nome"} 
        nameInput={"nome"} 
        idInput={"nome"} 
        placeholder={"Exemplo: Maria da Silva"} 
        gapContainerInput={"0.8rem"} 
      />

      <InputText
        emailValue={email}
        setEmail={setEmail}
        typeInput={"email"} 
        title={"Email"} 
        nameInput={"Email"} 
        idInput={"Email"} 
        placeholder={"Exemplo: exemplo@exemplo.com.br"} 
        gapContainerInput={"0.8rem"} 
      />

      <InputText
        passwordValue={password}
        setPassword={setPassword}
        typeInput={"password"} 
        title={"Senha"} 
        nameInput={"Senha"} 
        idInput={"Senha"} 
        placeholder={"No mínimo 6 caracteres"} 
        gapContainerInput={"0.8rem"} 
      />


      <Button view={"signUp"} setResponse={setResponse} data={data} title={"Criar conta"}/>

      <ButtonText view={"signUp"} title={"Já tenho uma conta"}/>

    </Container>

  )
}
