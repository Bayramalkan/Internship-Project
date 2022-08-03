import Head from "next/head";

import styles from "../styles/Home.module.css";
import Main from "./Main";

// MUI Imports

export default function Home({ data }) {
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
      <Main data={data} />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const axios = require("axios");
  const data = await axios.get(
    "https://monster-p.mncdn.com/cckeyboardapp/response.json"
  );

  return {
    props: { data: data.data },
  };
}
