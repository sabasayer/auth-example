import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import PanelLayout from "../components/panel-layout";
import { useAuth } from "../hooks/use-auth";
import { NextPageWithLayout } from "../types/layout";

const Panel: NextPageWithLayout = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    logout();
    router.push("/");
  };

  return (
    <Box p={3}>
      <Typography variant="h1" gutterBottom>
        Panele Hoş Geldiniz
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Çıkış Yap
      </Button>
    </Box>
  );
};

Panel.getLayout = function getLayout(page: ReactElement) {
  return <PanelLayout>{page}</PanelLayout>;
};

export default Panel;
