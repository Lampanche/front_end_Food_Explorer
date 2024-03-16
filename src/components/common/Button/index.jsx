import { Container } from "./styles.js";

import { api } from "../../../service";

import { useAuth } from "../../../hooks/auth.jsx";

import { useNavigate } from "react-router-dom";

export function Button({ view, data , setResponse, title})
{

  const { signIn } = useAuth();

  const navigate = useNavigate();

  async function handleClickSignIn(e)
  {
    e.preventDefault()

    signIn(data)

  }

  async function handleClickSignUp(e)
  {   
      e.preventDefault()

      try 
      {
        const response =  await api.post("/users", data)
        setResponse(response)
      } 
      catch (error) 
      {
        setResponse(error)
      }
  }


  if(view == "signUp")
  {
    return(
  
      <Container onClick={(e) => handleClickSignUp(e)}>
  
        {title}
  
      </Container>
  
    )

  }

  if(view == "signIn")
  {
    return(
  
      <Container onClick={(e) => {handleClickSignIn(e)}}>
  
        {title}
  
      </Container>
  
    )

  }


}