import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";
// const data = require("../../data/response.json");
import axios from "axios";

export async function getServerSiderProps() {
  // response.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=59");
  const response = await axios.get(
    "https://monster-p.mncdn.com/cckeyboardapp/response.json"
  );
  // console.log(response.data);
  return { props: { data: response.data } };
}

function CardList(props) {
  // const axios = require("axios");
  const [result, setResult] = useState([]);
  useEffect(() => {
    // setResult(data);
    getServerSiderProps().then((res) => {
      setResult(res.props.data);
      // console.log(res.props.data);
      // console.log(result);
    });
  }, []);

  // console.log(data);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://monster-p.mncdn.com/cckeyboardapp/response.json")
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     });
  // }, []);

  // const ids = data?.data?.products.map((item) => {
  //   return (ids = item.catIds);
  // });

  // console.log(ids);

  const ProductResult = result?.data?.products.filter((item) => {
    return item.catIds.includes("6224");
  });
  console.log("resultaaaa: ", ProductResult);

  return (
    <div className={styles.cardListwrapper}>
      {ProductResult?.map((item, index) => {
        return <Card key={index} item={item} index={index} />;
      })}
    </div>
  );
}
export default CardList;
