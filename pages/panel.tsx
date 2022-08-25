import { Box, Button } from "@mui/material";
import Router from "next/router";
import { ReactElement } from "react";
import PanelLayout from "../components/panel-layout";
import { useAuth } from "../hooks/use-auth";
import { NextPageWithLayout } from "../types/layout";

const Panel: NextPageWithLayout = () => {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
    Router.push("/");
  };

  return (
    <Box p={3}>
      <h1>Panele Hoş Geldiniz</h1>
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
