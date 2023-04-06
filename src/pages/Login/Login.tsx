import { useDispatch, useSelector } from "react-redux";
import { getMorty } from "../../services";
import { createUser } from "../../redux/states/user";

export const Login = () => {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const result = await getMorty();
      // console.log({result});
      dispatch(createUser(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2> Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};
 
export default Login;