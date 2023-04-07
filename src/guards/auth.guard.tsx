import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router";
import { PrivateRoutes, PublicRoutes } from "../models";

interface Props {
  isPrivate: boolean;
}

const PrivateValidation = <Outlet />;
const PublicValidation = <Navigate replace to={PrivateRoutes.PRIVATE} />;

// se va a ejecutar cada vez que se entre a rutas privadas
export const AuthGuard = ({ isPrivate }: Props) => {
  const { name } = useSelector((store: AppStore) => store.user);
  // if had user name, then is logged
  return name ? (
    isPrivate ? (
      // if user is logged and try to enter to private, then show private
      PrivateValidation
    ) : (
      // if user is logged and try to enter to login, then redirect to private
      PublicValidation
    )
  ) : (
    // if user is not logged and try to enter to private, then redirect to login
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
