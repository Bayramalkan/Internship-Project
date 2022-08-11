import React, { useEffect, useState } from "react";
import Category from "./Category";

import styles from "./Category.module.css";
import { categories } from "./CategoryItem";
import Filter from "./Filter";
const CategoryList = ({ data }) => {
  // console.log(data);

  const [filteredData, setFilteredData] = useState(data?.data?.filters);
  console.log("1111", filteredData);

  useEffect(() => {}, []);

  return (
    <div className={styles.categoryContainer}>
      {categories.map((category, index) => {
        // const depthLevel = "0";
        return <Category key={index} category={category} />;
      })}
      {/* 
      <div>
        <div className={styles.filterContainer}>
          <Filter />
        </div>
      </div> */}
    </div>
  );
};

export default CategoryList;
