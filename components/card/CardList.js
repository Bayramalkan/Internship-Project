// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Filter from "../categories/Filter";
import Sort from "../stock-sort/Sort";
import Stock from "../stock-sort/Stock";
import Card from "./Card";
import styles from "./Card.module.css";
// const data = require("../../data/response.json");
// import axios from "axios";

function CardList({ data }) {
  // const axios = require("axios");
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

  const result = data?.data?.products.filter((item) => {
    return item.catIds.includes("6224");
  });
  console.log("result: ", result);

  const stock = result?.filter((item) => {
    // console.log(item);
    return item.stockStatus.includes("Temin Edilebiliyor");
  });
  // const stock = result?.stockStatus.includes("Temin Edilebiliyor");
  // console.log(stock);

  const [isChecked, setIsChecked] = useState(false);
  const [renderData, setRenderData] = useState(result);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };

  function myFunction(obj, prop) {
    return obj.reduce(function (acc, item) {
      let key = item[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);

      return acc;
    }, []);
  }
  let grouped = myFunction(data?.data.filters, "filterGroupName");
  console.log(grouped);

  let groupName = myFunction(grouped, "filterName");
  console.log(" groupName:", groupName);

  const [filter, setFilter] = useState([]);
  const [filterGroupName, setFilterGroupName] = useState([]);
  const [filterName, setFilterName] = useState([]);
  Object.keys(grouped).forEach((key, index) => {
    // console.log(index)
    filter.push(grouped[key]);
    console.log(key, grouped[key]);

    // console.log("group key:", grouped[key]);
    filterGroupName.push(key);

    grouped[key].forEach((item) => {
      filterName.push(item.filterName);
    });

    // filterName.push(grouped[key][0].filterName);
  });

  // filter.map((item, index) => {
  //   item.map((item, index) => {
  //     console.log(item);
  //   });
  // });

  // filter.filter((item) => {
  //   return item.filterGroupName?.includes("Marka");
  // });
  // console.log("aaaaaaaaaaaaa", filter);

  // console.log(key);
  // console.log("resssss", index, grouped[index]);
  // grouped[index].forEach((item) => {
  //   // console.log(item);
  //   filter.push(item);
  //   filter
  //     .filter((item) => {
  //       return item.filterGroupName === index;
  //     })
  //     .map((item) => {
  //       console.log(item);
  //     });
  // });
  // });
  console.log("filter: ", filter);
  console.log("filterGroupName: ", filterGroupName);
  console.log("filterName: ", filterName);
  //     console.log(filter);
  // }),
  // setFilter(filter);
  // setFilter(index);
  // }),
  // console.log(filter);
  // const test = grouped?.filterGroupName?.filter((item) => {
  //   return item.includes("Ağırlık");
  // });
  // console.log(test);

  useEffect(() => {
    isChecked ? setRenderData(stock) : setRenderData(result);
    console.log(stock);
  }, [isChecked]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        width: "100%",
      }}
    >
      <Stock check={handleCheckboxChange} />
      {/* <Sort /> */}

      <Filter filterGroupName={filterGroupName} />

      <div className={styles.cardListwrapper}>
        {renderData?.map((item, index) => {
          return <Card key={index} item={item} check={isChecked} />;
        })}
      </div>
    </div>
  );
}
export default CardList;
