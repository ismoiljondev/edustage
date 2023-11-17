import type { AppProps } from "next/app";

import Layout from "@/src/layouts/MainLayout";

import "@/src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
