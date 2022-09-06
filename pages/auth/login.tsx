import { TextField, Button, Stack, Alert } from "@mui/material";
import { FormEvent } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useAuthForm } from "../../hooks/use-auth-form";
import { LoginModel } from "../../types/auth";
import { NextPageWithLayout } from "../../types/layout";
import { HourglassEmpty } from "@mui/icons-material";

const Login: NextPageWithLayout = () => {
  const {
    value,
    getFieldValue,
    handleOnChange,
    fieldHasError,
    hasAnyError,
    onSubmit,
    loading,
  } = useAuthForm<LoginModel>(
    {
      email: "",
      password: "",
    },
    { email: { required: true }, password: { required: true } }
  );
  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onSubmit(() => login(value));
  };

  return (
    <Stack
      component="form"
      autoComplete="off"
      spacing={2}
      px={2}
      onSubmit={handleSubmit}
    >
      <TextField
        label="E-mail Adresin"
        disabled={loading}
        error={fieldHasError("email")}
        value={getFieldValue("email")}
        onChange={(ev) => handleOnChange(ev, "email")}
        helperText={fieldHasError("email") && "Email Alanı Zorunludur"}
      />
      <TextField
        label="Şifre"
        type="password"
        disabled={loading}
        error={fieldHasError("password")}
        value={getFieldValue("password")}
        onChange={(ev) => handleOnChange(ev, "password")}
        helperText={fieldHasError("password") && "Şifre Alanı Zorunludur"}
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
      {hasAnyError() && (
        <Alert severity="error">Lütfen hatalı alanları kontrol ediniz</Alert>
      )}
    </Stack>
  );
};

export default Login;
