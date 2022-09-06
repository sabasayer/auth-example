import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "../styles/theme/light-theme";
import { NextPageWithLayout } from "../types/layout";
import { useRouter } from "next/router";
import AuthLayout from "../components/auth-layout";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();

  const createApp = (children: ReactNode) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    );
  };

  if (router.pathname.startsWith("/auth")) {
    return createApp(
      <AuthLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </AuthLayout>
    );
  }

  return createApp(
    getLayout(
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    )
  );
}

export default MyApp;
