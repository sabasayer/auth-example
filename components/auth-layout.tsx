import {
  Alert,
  Box,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../store/slices/userSlice";
import { RootState } from "../store/store";
import { LayoutProps } from "../types/layout";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  const handleChange = (ev: any, value: string) => {
    if (value === "login") router.push("/auth/login");
    else router.push("/auth/signup");
  };

  const activeTab = () => {
    const arr = router.pathname.split("/");
    return arr[arr.length - 1];
  };

  const handleClose = () => dispatch(setError(false));

  return (
    <Box p={3}>
      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Lütfen Giriş Yapınız</Alert>
      </Snackbar>
      <Stack alignItems="center">
        <Typography variant="h3" gutterBottom>
          Merhaba
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit ametti consectetur adipiscing elit.
        </Typography>
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
