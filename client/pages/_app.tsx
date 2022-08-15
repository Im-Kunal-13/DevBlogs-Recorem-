import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import { AppContextProvider } from "../context/contextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationsProvider } from "@mantine/notifications";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
