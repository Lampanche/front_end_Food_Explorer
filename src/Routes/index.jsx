import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes";

import { AppRoutes } from "./AppRoutes";

import { useAuth } from "../hooks/auth";

export function Routes()
{

  const { user } = useAuth();

  return(

    <BrowserRouter>
    
      {
        user ?

        <AppRoutes/>

        :

        <AuthRoutes/>
      }

    </BrowserRouter>

  )
}