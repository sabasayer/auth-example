import { useDispatch, useSelector } from "react-redux";
import { set } from "../store/slices/userSlice";
import { RootState } from "../store/store";
import { LoginModel } from "../types/auth";

export const useAuth = () => {
  const value = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  const login = ({ email }: LoginModel) =>
    new Promise((resolve) => {
      setTimeout(() => {
        dispatch(set(email));
        resolve(true);
      }, 3000);
    });

  const logout = () => dispatch(set(""));
  const isAuthenticated = () => !!value;

  return { email: value, login, isAuthenticated, logout };
};
