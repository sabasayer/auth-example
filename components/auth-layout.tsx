import { Alert, Box, Snackbar, Stack, Tab, Tabs } from "@mui/material";
import Router, { useRouter } from "next/router";
import { LayoutProps } from "../types/layout";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const error = !!router.query?.error;

  const handleChange = (ev: any, value: string) => {
    console.log(value);

    if (value === "login") Router.push("/auth/login");
    else Router.push("/auth/signup");
  };

  const activeTab = () => {
    const arr = router.pathname.split("/");
    return arr[arr.length - 1];
  };

  return (
    <Box p={3}>
      <Snackbar open={error}>
        <Alert severity="error">Lütfen Giriş Yapınız</Alert>
      </Snackbar>
      <Stack alignItems="center">
        <h1>Merhaba</h1>
        <p>Lorem ipsum dolor sit ametti consectetur adipiscing elit.</p>
      </Stack>
      <Stack spacing={3}>
        <Tabs value={activeTab()} onChange={handleChange} variant="fullWidth">
          <Tab value="login" label="Giriş Yap" />
          <Tab value="signup" label="Üye Ol" />
        </Tabs>
        {children}
      </Stack>
    </Box>
  );
};

export default AuthLayout;
