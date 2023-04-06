import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router";
import { PublicRoutes } from "../models";


// se va a ejecutar cada vez que se entre a rutas privadas
export const AuthGuard = () => {
  const { name } = useSelector((store: AppStore) => store.user);
  return name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;