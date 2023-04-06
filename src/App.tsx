 
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard } from "./guards";
import { Login, Private } from "./pages";
import { RoutesWithNotFound } from './helpers/routes-with-not-found';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </div>
  );
}

export default App;
