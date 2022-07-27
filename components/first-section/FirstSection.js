import React, { useState } from "react";
import styles from "./FirstSection.module.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FirstSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const moreFunction = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={styles.container}
        style={{
          width: "100%",
          height: "300px",
          background:
            "url(https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/listBanner/Oyun-Bilgisayarları.png) no-repeat center",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className={styles.firstsectionwrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}> OYUN BİLGİSAYARLARI</h1>
            <p className={styles.description}>
              En gelişmiş ekran kartları ve en yeni nesil işlemcilerle güç
              kazanan Monster oyun bilgisayarı serileri, sizi kusursuz bir oyun
              deneyimine davet ediyor. Masaüstü bilgisayarın gücünü, diz üstü
              bilgisayarın işlevselliği ile birleştiren Monster oyun laptopları
              ile daha güçlü ve daha hızlı bir dönem başlıyor.
              <div className={styles.more} onClick={moreFunction}>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "#26df2e",
                  }}
                >
                  daha fazla göster
                </a>
                {isOpen ? (
                  <KeyboardArrowDownIcon
                    style={{
                      color: "#26df2e",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    style={{
                      color: "#26df2e",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
