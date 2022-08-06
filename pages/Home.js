import React from "react";
import CardList from "../components/card/CardList";
import CategoryList from "../components/categories/CategoryList";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import Navbar from "../components/navbar/Navbar";

import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const resp = await fetch(
    "https://monster-p.mncdn.com/cckeyboardapp/response.json"
  );

  return {
    props: {
      data: await resp.json(),
    },
  };
}

const Home = ({ data }) => {
  return (
    <div
    //   style={{
    //     width: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     flexDirection: "column",
    //     margin: "0 auto",
    //   }}
    >
      {/* <Top />
      <Rest data={data} /> */}

      <Navbar />
      <NavbarBottom />

      <div className={styles.restContainer}>
        <CategoryList />
        <CardList data={data} />
      </div>
    </div>
  );
};

export default Home;
