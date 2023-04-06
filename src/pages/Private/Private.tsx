import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from '../../models/routes';
import { Home } from "./Home"; 
import { Dashboard } from "./Dashboard";
import { RoutesWithNotFound } from "../../helpers";

export const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
};
