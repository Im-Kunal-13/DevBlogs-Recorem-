import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AppContextProvider } from "../context/contextProvider";

import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
