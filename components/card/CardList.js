import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";
// const data = require("../../data/response.json");
import axios from "axios";

function CardList() {
  const axios = require("axios");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://monster-p.mncdn.com/cckeyboardapp/response.json")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  // const ids = data?.data?.products.map((item) => {
  //   return (ids = item.catIds);
  // });

  // console.log(ids);

  const result = data?.data?.products.filter((item) => {
    return item.catIds.includes("6224");
  });
  console.log("result: ", result);

  return (
    <div className={styles.cardListwrapper}>
      {result?.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
}
export default CardList;
