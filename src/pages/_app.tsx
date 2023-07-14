import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3507918834376944"
        crossOrigin="anonymous"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
