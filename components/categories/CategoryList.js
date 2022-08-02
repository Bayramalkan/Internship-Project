import React from "react";
import Category from "./Category";

import styles from "./Category.module.css";
import { categories } from "./CategoryItem";
const CategoryList = () => {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category, index) => {
        const depthLevel = "0";
        return (
          <Category key={index} category={category} depthLevel={depthLevel} />
        );
      })}
    </div>
  );
};

export default CategoryList;
