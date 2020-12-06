import { ReactComponentElement, ReactNode } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

interface MyAppProps {
  Component: React.FC;
  pageProps: any;
}
