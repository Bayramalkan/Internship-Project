import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";
const data = require("../../data/response.json");

function CardList() {
  return (
    <div className={styles.cardListContainer}>
      {data.data.products.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
}
export default CardList;
