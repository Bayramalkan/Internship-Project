// import React from "react";
// import styles from "./Category.module.css";
// import { categories } from "./CategoryItem";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const Category = () => {
//   // const [heading, setHeading] = useState("");
//   return (
//     <div className={styles.categoryWrapper}>
//       <div className={styles.categoryTitle}>
//         KATEGORİLER
//         <KeyboardArrowDownIcon
//           style={{
//             color: "#26df2e",
//             cursor: "pointer",
//           }}
//         />
//       </div>
//       {categories.map((category, index) => {
//         return (
//           <div className={styles.categoryListWrapper} key={index}>
//             {category.title}
//             <div>
//               {category.submenu.map((submenu, index) => {
//                 return (
//                   <div key={index}>
//                     {submenu.title}
//                     {submenu.submenu.map((subsubmenu, index) => {
//                       return (
//                         <div key={index}>
//                           {subsubmenu.title}
//                           {subsubmenu.submenu.map((subitem, index) => {
//                             return <div key={index}>{subitem.title}</div>;
//                           })}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Category;

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
  const [isPcOpen, SetIsPcOpen] = useState(null);
  const [isPcItemOpen, setIsPcItemOpen] = useState(null);

  const handleCategoryOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handlePcCategoryOpen = () => {
    setIsPcCategoryOpen(!isPcCategoryOpen);
  };

  const handlePcOpen = (i) => {
    SetIsPcOpen(i);
    console.log(i);
  };

  const handlePcItemOpen = (i) => {
    SetIsPcOpen(i);
    console.log(i);
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
                  onClick={() => handlePcOpen(index)}
                >
                  {item.title}
                  {isPcOpen === index
                    ? item.submenu.map((subitem, index) => {
                        return (
                          <li key={index}>
                            {subitem.title}
                            {subitem.submenu.map((subsubitem, index) => {
                              return (
                                <ul key={index}>
                                  <li key={index}>{subsubitem.title}</li>
                                </ul>
                              );
                            })}
                          </li>
                        );
                      })
                    : null}
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
