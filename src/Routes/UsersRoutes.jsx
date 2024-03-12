import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

import { Details } from "../pages/Details";

export function UsersRoutes()
{

  return(

    <Routes>

      <Route path="/home" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>} />

    </Routes>

  )

}