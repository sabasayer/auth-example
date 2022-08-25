import { TextField, Button, Stack, Alert } from "@mui/material";
import React, { FormEvent, ReactElement, useState } from "react";
import AuthLayout from "../../components/auth-layout";
import { useAuth } from "../../hooks/use-auth";
import { useAuthForm } from "../../hooks/use-auth-form";
import { LoginModel } from "../../types/auth";
import { NextPageWithLayout } from "../../types/layout";
import { CheckCircleOutline, HourglassEmpty } from "@mui/icons-material";
import Router from "next/router";

const Login: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const { value, getFieldValue, handleOnChange } = useAuthForm<LoginModel>({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const onSubmit = async (event: FormEvent) => {
    if (loading) return;

    event.preventDefault();
    setLoading(true);
    await login(value);
    setLoading(false);
    Router.push("/panel?loggedIn=1");
  };

  return (
    <Stack
      component="form"
      autoComplete="off"
      spacing={2}
      px={2}
      onSubmit={onSubmit}
    >
      <TextField
        label="E-mail Adresin"
        disabled={loading}
        value={getFieldValue("email")}
        onChange={(ev) => handleOnChange(ev, "email")}
      />
      <TextField
        label="Şifre"
        type="password"
        disabled={loading}
        value={getFieldValue("password")}
        onChange={(ev) => handleOnChange(ev, "password")}
      />
      <Stack alignItems="end">
        <Button variant="text">Şifremi Unuttum</Button>
      </Stack>
      <Button
        color="primary"
        disabled={loading}
        variant="contained"
        type="submit"
      >
        Giriş Yap
        {loading && <HourglassEmpty />}
      </Button>
    </Stack>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
