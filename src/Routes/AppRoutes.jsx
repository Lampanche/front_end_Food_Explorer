import { Routes, Route } from "react-router-dom";

import { UsersRoutes } from "./UsersRoutes";

import { AdminRoutes } from "./AdminRoutes";


export function AppRoutes()
{
  const admin = true;

  return admin ? <AdminRoutes/> : <UsersRoutes/> 
  
  
}
