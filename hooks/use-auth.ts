import { useState } from "react";
import { LoginModel } from "../types/auth";

const KEY = "USER_EMAIL_ADDRESS";

const isServerSide = () => typeof window === "undefined";

const getFromLocaleStorage = (): string | null => {
  if (isServerSide()) return null;

  return window.localStorage.getItem(KEY);
};

const setToLocaleStorage = (value: string) => {
  if (isServerSide()) return;

  window.localStorage.setItem(KEY, value);
};

const removeFromLocaleStorage = () => {
  if (isServerSide()) return;

  window.localStorage.removeItem(KEY);
};

export const useAuth = () => {
  const [value] = useState(() => {
    return getFromLocaleStorage();
  });

  const login = ({ email }: LoginModel) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setToLocaleStorage(email);
        resolve(true);
      }, 3000);
    });

  const logout = () => removeFromLocaleStorage();

  const isAuthenticated = () => !!value;

  return { email: value, login, isAuthenticated, logout };
};
