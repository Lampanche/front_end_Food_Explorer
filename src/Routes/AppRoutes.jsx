import { UsersRoutes } from "./UsersRoutes";

import { AdminRoutes } from "./AdminRoutes";

import { useAuth } from "../hooks/auth";

export function AppRoutes()
{
  const { user } = useAuth()

  return user.admin ? <AdminRoutes/> : <UsersRoutes/>

}
