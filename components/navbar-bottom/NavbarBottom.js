import React from "react";
import styles from "./NavbarBottom.module.css";

const NavbarBottom = () => {
  const NavbarBottomData = [
    "TÜM LAPTOPLAR",
    "OYUN BİLGİSAYARLARI",
    "OYUNCU EKİPMANLARI",
    "OYUNCU MONİTÖRÜ",
    "İŞ BİLGİSAYARLARI",
    "İŞ İSTASYONLARI",
  ];
  return (
    // <div className={styles.container}>    </div>
    // <div className={styles.navbarbottomwrapper}>      </div>
    <>
      <div className={styles.border}></div>
      <div className={styles.navbarbottomlistWraper}>
        <ul className={styles.navbarbottomlist}>
          {NavbarBottomData.map((item, index) => {
            return (
              <li className={styles.navbarbottomlink} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavbarBottom;
