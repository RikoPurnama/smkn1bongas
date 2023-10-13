import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "../components/Layouts/appShell";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#fff" />
        <meta
          name="description"
          content="SMK Negeri 1 Bongas Jl. Raya Margamulya No.276 B, Margamulya, Kec. Bongas, Kabupaten Indramayu, Jawa Barat 45255"
        />
        <meta name="keywords" content="smkn 1 bongas, smk negeri 1 bongas, smk bongas" />
        <title>SMK Negeri 1 Bongas</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/fav/site.webmanifest" />
      </Head>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
