import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

import { Details } from "../pages/Details";

import { Restaurants } from "../pages/Restaurants";

export function UsersRoutes()
{

  return(

    <Routes>

      <Route path="/home" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/" element={<Restaurants/>} />

    </Routes>

  )

}