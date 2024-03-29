import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

import { Details } from "../pages/Details";

import { New } from "../pages/New";

import { Edit } from "../pages/Edit";

import { Restaurants } from "../pages/Restaurants";

import { NewRestaurant } from "../pages/NewRestaurant";

import { EditRestaurant } from "../pages/EditRestaurant";

export function AdminRoutes()
{

  return(

    <Routes>

      <Route path="/home" element={<Home/>} />
      <Route path="/details" element={<Details/>} />
      <Route path="/new" element={<New/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/" element={<Restaurants/>} />
      <Route path="/newRestaurant" element={<NewRestaurant/>} />
      <Route path="/editRestaurant" element={<EditRestaurant/>} />
      
    </Routes>

  )

}