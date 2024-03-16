import { Container } from "./styles.js";

import { InputText } from "../../common/InputText";

import { Button } from "../../common/Button";

import { ButtonText } from "../../common/ButtonText";

import { FormTitle } from "../../desktop/FormTitle";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Toaster, toast } from "react-hot-toast";

import { AxiosError } from "axios";

export function FormSignUpDesktop()
{ 

  const navigate = useNavigate()

  const [ name , setName] = useState("");
  const [ email , setEmail] = useState("");
  const [ password , setPassword] = useState("");
  const [ response, SetResponse ] = useState(null);

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

      <Toaster 
      containerStyle={{fontFamily: "Roboto, sem serifa"}} />

      <form>

        <FormTitle title={"Crie sua conta"}/>

        <InputText
          nameValue={name}
          setName={setName}
          title={"Seu nome"}
          idInput={"name"}
          nameInput={"name"}
          typeInput={"text"}
          gapContainerInput={"0.8rem"}
          placeholder={"Exemplo: Maria da Silva"}
        />

        <InputText
          emailValue={email}
          setEmail={setEmail}
          title={"Email"}
          idInput={"email"}
          nameInput={"email"}
          typeInput={"email"}
          gapContainerInput={"0.8rem"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />

        <InputText
          passwordValue={password}
          setPassword={setPassword}
          title={"Senha"}
          idInput={"password"}
          nameInput={"password"}
          typeInput={"password"}
          gapContainerInput={"0.8rem"}
          placeholder={"No mínimo 6 caracteres"}
        />

        <Button view={"signUp"} data={data} setResponse={SetResponse} title={"Criar conta"}/>

        <ButtonText view={"signUp"} title={"Já tenho uma conta"}/>

      </form>
     
    </Container>

  )
}