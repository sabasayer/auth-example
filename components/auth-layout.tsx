import { Alert, Box, Snackbar, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { LayoutProps } from "../types/layout";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const error = !!router.query?.error;

  return (
    <Box p={3}>
      <Snackbar open={error}>
        <Alert severity="error">Lütfen Giriş Yapınız</Alert>
      </Snackbar>
      <Stack alignItems="center">
        <h1>Merhaba</h1>
        <p>Lorem ipsum dolor sit ametti consectetur adipiscing elit.</p>
      </Stack>
      {children}
    </Box>
  );
};

export default AuthLayout;
