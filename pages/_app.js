import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => {
  //   setShowChild(true);
  // }, []);

  // if (!showChild) {
  //   return null;
  // }

  // const [showing, setShowing] = useState(false);

  // useEffect(() => {
  //   setShowing(true);
  // }, []);

  // if (!showing) {
  //   return null;
  // }

  // if (typeof window === "undefined") {
  //   return <></>;
  // } else
  {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
