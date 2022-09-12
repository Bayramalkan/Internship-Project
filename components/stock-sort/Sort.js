import React, { useState } from "react";
import styles from "./StockSort.module.css";

function Sort() {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortMenu} onClick={handleDropDown}>
        SIRALA: MONSTER IN SEÇİMİ
        {dropDown ? (
          <ul className={styles.sortList}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Sort;
