import React from "react";
import Card from "../components/card/Card";
import CardList from "../components/card/CardList";
import styles from "../styles/Home.module.css";
import CategoryList from "../components/categories/CategoryList";
const Rest = ({ data }) => {
  return (
    <div className={styles.restContainer}>
      <CategoryList />
      <CardList data={data} />
    </div>
  );
};

export default Rest;
