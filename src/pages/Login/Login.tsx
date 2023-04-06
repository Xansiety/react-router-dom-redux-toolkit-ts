import { useDispatch, useSelector } from "react-redux";
import { getMorty } from "../../services";
import { createUser } from "../../redux/states/user";

export const Login = () => {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
    } catch (error) {}
  };

  return (
    <div>
      <h2> Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};
