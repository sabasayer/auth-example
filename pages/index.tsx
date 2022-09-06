import type { NextPage } from "next";
import { Stack, Button, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Typography variant="h1" gutterBottom>
          Hoş Geldin
        </Typography>

        <Stack spacing={2} direction="row">
          <NextLink href="/panel" passHref>
            <Button variant="contained">Panele Git</Button>
          </NextLink>
          <NextLink href="/auth/login" passHref>
            <Button variant="text">Giriş Yap</Button>
          </NextLink>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
