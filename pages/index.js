import Head from "next/head";

import styles from "../styles/Home.module.css";
import Main from "./Main";

// MUI Imports

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Gaming PC Page</title>
        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://monster-p.mncdn.com"
        />
        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
        />
      </Head>
      <Main />
    </div>
  );
}
