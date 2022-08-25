import { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import Router, { useRouter } from "next/router";
import { LayoutProps } from "../types/layout";
import { Alert, Snackbar } from "@mui/material";

const PanelLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const isLoggedIn = !!router.query?.loggedIn;

  useEffect(() => {
    if (!isAuthenticated()) {
      Router.push("/auth/login?error=1");
    }
  });

  return isAuthenticated() ? (
    <div>
      {children}
      <Snackbar open={isLoggedIn}>
        <Alert severity="success">Giriş Başarılı</Alert>
      </Snackbar>
    </div>
  ) : (
    <div />
  );
};

export default PanelLayout;
