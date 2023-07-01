import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// TODO: hide credentials with env variables
// TODO: add postit to projects
// TODO: add spinner
