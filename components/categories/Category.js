import React, { useEffect, useState } from "react";
import styles from "./Category.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Category = ({ category, depthLevel }) => {
  console.log("aaaaaaa", category);
  useEffect(() => {
    console.log(depthLevel);
  }, [depthLevel]);
  const [categoryLevel, setCategoryLevel] = useState(depthLevel);

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPcCategoryOpen, setIsPcCategoryOpen] = useState(false);
  const [isPcOpen, SetIsPcOpen] = useState(false);

  const handleCategoryOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handlePcCategoryOpen = () => {
    setIsPcCategoryOpen(!isPcCategoryOpen);
  };

  const handlePcOpen = () => {
    SetIsPcOpen(!isPcOpen);
  };

  return (
    <>
      <div className={styles.categoryWrapper}>
        <div className={styles.categoryTitle} onClick={handleCategoryOpen}>
          KATEGORİLER
          <KeyboardArrowDownIcon
            style={{
              color: "#26df2e",
              cursor: "pointer",
            }}
          />
        </div>
        {isCategoryOpen ? (
          <div className={styles.categoryListWrapper}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {category.title}
              <KeyboardArrowDownIcon
                onClick={handlePcCategoryOpen}
                style={{
                  color: "#26df2e",
                  cursor: "pointer",
                }}
              />
            </div>

            {category.submenu.map((item, index) => {
              return isPcCategoryOpen ? (
                <ul
                  className={styles.categorySubmenu}
                  key={index}
                  onClick={handlePcOpen}
                >
                  {item.title}
                  {item.submenu.map((subitem, index) => {
                    console.log("subitem", subitem);
                    return isPcOpen ? (
                      <ul className={styles.categorySubSubmenu} key={index}>
                        {subitem.title}

                        {subitem.submenu.map((subsubitem, index) => {
                          return (
                            <li
                              className={styles.categorySubSubListİtem}
                              key={index}
                            >
                              {subsubitem.title}
                            </li>
                          );
                        })}
                      </ul>
                    ) : null;
                  })}
                </ul>
              ) : null;
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Category;

// category.submenu.map(function (item, index) {})
