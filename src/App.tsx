import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RoutesWithNotFound } from "./helpers/routes-with-not-found";
import { Provider } from "react-redux"; 
import { store } from "./redux/store"; 
import { AuthGuard } from "./guards"; 
import { PrivateRoutes, PublicRoutes } from "./models";
import "./App.css"; 

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));
 
function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Provider store={store}>
          <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            {/* Encapsulamos por módulos nuestras rutas y validamos mediante un GUARD */}
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
        </Provider>        
      </Suspense>
    </div>
  );
}

export default App;
