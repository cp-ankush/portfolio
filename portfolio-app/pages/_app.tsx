import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/header-container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-background w-screen h-screen flex justify-center">
      <div className="max-w-1 w-screen h-screen px-24">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
