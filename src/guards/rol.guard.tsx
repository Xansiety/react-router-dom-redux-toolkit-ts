import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Roles } from "../models/roles";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";

interface Props {
    rol: Roles;
}

export const RolGuard = ({ rol } : Props) => {
  const userState = useSelector((store: AppStore) => store.user); 
  return userState.rol === rol ? <Outlet /> : <Navigate replace to={ PublicRoutes.LOGIN} />; 
};
