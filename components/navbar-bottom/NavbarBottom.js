import React from "react";
import styles from "./NavbarBottom.module.css";

const NavbarBottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarbottomwrapper}>
        <div className={styles.border}></div>
        <div className={styles.navbarbottomlistWraper}>
          <ul className={styles.navbarbottomlist}>
            <li className={styles.navbarbottomitem}>
              <a href="#" className={styles.navbarbottomlink}>
                <span className={styles.navbarbottomlinktext}>
                  TÜM LAPTOPLAR
                </span>
              </a>
            </li>

            <li className={styles.navbarbottomitem}>
              <a href="#" className={styles.navbarbottomlink}>
                <span className={styles.navbarbottomlinktext}>
                  OYUN BİLGİSYARLARI
                </span>
              </a>
            </li>

            <li className={styles.navbarbottomitem}>
              <a href="#" className={styles.navbarbottomlink}>
                <span className={styles.navbarbottomlinktext}>
                  OYUNCU EKİPMANLARI
                </span>
              </a>
            </li>

            <li className={styles.navbarbottomitem}>
              <a href="#" className={styles.navbarbottomlink}>
                <span className={styles.navbarbottomlinktext}>
                  OYUNCU MONİTÖRÜ
                </span>
              </a>
            </li>

            <li className={styles.navbarbottomitem}>
              <a href="#" className={styles.navbarbottomlink}>
                <span className={styles.navbarbottomlinktext}>
                  İŞ BİLGİSAYARLARI
                </span>
              </a>
            </li>

            <li className={styles.navbarbottomitem}>
              <a href="#" className={styles.navbarbottomlink}>
                <span className={styles.navbarbottomlinktext}>
                  İŞ İSTASYONLARI
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
