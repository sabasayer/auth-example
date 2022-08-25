import type { NextPage } from "next";
import { Stack, Button } from "@mui/material";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hoş Geldin</h1>

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
