import { UserKey, resetUser } from "../../redux/states/user";
import { clearItemLocalStorage } from "../../helpers";
import { useNavigate } from "react-router";
import { PublicRoutes } from "../../models";
import { useDispatch } from 'react-redux';

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    clearItemLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, {
      replace: true,
    });
  };
  return <button onClick={logout}>LogOut</button>;
}
