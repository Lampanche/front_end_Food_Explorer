import { createContext, useContext, useState } from "react";


import { api } from "../service";

const AuthContext = createContext({});

function AuthProvider({children})
{
  const [ data, setData ] = useState({});

  async function signIn({ email, password })
  {
    
    try 
    {
      const response = await api.post("/session", { email, password })

      const { user, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`

      if(user.admin == 0)
      {
        user.admin = false
      }
      else if(user.admin == 1)
      {
        user.admin = true
      }

      setData({user, token})

    } 
    catch (error) 
    {
      if(error.response)
      {
        alert(error.response.data.message)
      }
    }


  }


  return(

    <AuthContext.Provider  value={ { signIn, user: data.user } }>

      {children}

    </AuthContext.Provider>

  )

}

function useAuth()
{
  const context = useContext(AuthContext)
  return context
}


export { AuthProvider, useAuth }