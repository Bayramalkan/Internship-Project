import React from "react";
import styles from "./FirstSection.module.css";

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "100%",
          height: "300px",

          background:
            "url(https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/listBanner/Oyun-Bilgisayarları.png) no-repeat center",
        }}
      ></div>
    </div>
  );
};

export default FirstSection;
