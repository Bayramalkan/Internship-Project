import React from "react";
import Category from "./Category";
import styles from "./Category.module.css";

const CategoryList = () => {
  const categories = [
    {
      title: "Tüm Laptoplar (59)",
      submenu: [
        {
          id: 0,
          title: "Oyun Bilgisayarları",
          submenu: [
            {
              id: 0,
              title: "Abra",
              submenu: [
                {
                  title: "Abra A5",
                },
                {
                  title: "Abra A7",
                },
              ],
            },
            {
              id: 1,
              title: "Tuplar",
              submenu: [
                {
                  title: "Tuplar T5",
                },
                {
                  title: "Tuplar T7",
                },
              ],
            },
            {
              id: 2,
              title: "Semruk",
              submenu: [
                {
                  title: "Semruk S7",
                },
              ],
            },
          ],
        },
        {
          id: 1,
          title: "İş İstasyonları",
          submenu: [
            {
              title: "Markut",
              submenu: [
                {
                  title: "Markut",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "İş Bilgisayarları",
          submenu: [
            {
              title: "Huma",
              submenu: [
                {
                  title: "Huma H4",
                },

                {
                  title: "Huma H5",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

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
