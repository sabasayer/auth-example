import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useRouter } from "next/router";
import { LayoutProps } from "../types/layout";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setError, setSuccess } from "../store/slices/userSlice";

const PanelLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.success);
  const dispatch = useDispatch();

  useEffect(() => {
    setAuthenticated(isAuthenticated());
    if (!isAuthenticated()) {
      dispatch(setError(true));
      router.push("/auth/login");
    }
  }, []);

  const handleClose = () => dispatch(setSuccess(false));

  const style = { display: authenticated ? "block" : "none" };

  return (
    <div style={style}>
      {children}
      <Snackbar open={isLoggedIn} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success">Giriş Başarılı</Alert>
      </Snackbar>
    </div>
  );
};

export default PanelLayout;
