import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RoutesWithNotFound } from "./helpers/RoutesWithNotFound.helper";
import { Provider } from "react-redux"; 
import { store } from "./redux/store"; 
import { AuthGuard, RolGuard } from "./guards"; 
import { PrivateRoutes, PublicRoutes } from "./models";
import "./App.css";  
import { Logout } from "./components";
import { Roles } from "./models/roles";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));
 
function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Provider store={store}>
          <BrowserRouter>
          <Logout />
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            {/* Encapsulamos por módulos nuestras rutas y validamos mediante un GUARD */}
            <Route element={<AuthGuard  isPrivate={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            <Route element={ <RolGuard rol={Roles.ADMIN} /> } >
                <Route path={`${PrivateRoutes.ADMIN}`} element={<h1>Admin</h1>} />      
            </Route>
          </RoutesWithNotFound> 
        </BrowserRouter>
        </Provider>        
      </Suspense>
    </div>
  );
}

export default App;
