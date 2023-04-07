import { useDispatch, useSelector } from "react-redux";
import { getMorty } from "../../services";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { useNavigate } from "react-router";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { useEffect } from "react";
import { clearItemLocalStorage } from "../../helpers";
import { Roles } from "../../models/roles";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // cada que el usuario entre al login, lo deslogueamos de la app
  useEffect(() => {
    clearItemLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, {
      replace: true,
    });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({...result,
        rol: Roles.ADMIN}));
      navigate(`/${PrivateRoutes.PRIVATE}`, {
        replace: true,
      });
    } catch (error) {}
  };

  return (
    <div>
      <h2> Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
