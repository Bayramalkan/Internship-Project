import React from "react";
import NavbarLogo from "../Logo/NavbarLogo";
import styles from "./Navbar.module.css";

// MUI Imports
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { color, style } from "@mui/system";

const Navbar = () => {
  return (
    <header className={styles.siteheader}>
      <div className={styles.siteheaderwrapper}>
        <div className={styles.gradientborder}>
          <div className={styles.navbartopwrapper}>
            <div className={styles.navbartopinner}>
              <ul className={styles.navbarlist}>
                <li className={styles.navbaritem}>
                  <a href="#" className={styles.navbarlink}>
                    <span className={styles.navbarlinktext}>
                      0 850 255 11 11
                    </span>
                  </a>
                </li>

                <li className={styles.navbaritem}>
                  <a href="#" className={styles.navbarlink}>
                    <span className={styles.navbarlinktext}>MESAJ GÖNDER</span>
                  </a>
                </li>

                <li className={styles.navbaritem}>
                  <a href="#" className={styles.navbarlink}>
                    <span className={styles.navbarlinktext}>MAĞAZALAR</span>
                  </a>
                </li>

                <li className={styles.navbaritem}>
                  <a href="#" className={styles.navbarlink}>
                    <span className={styles.navbarlinktext}>TEKNİK SERVİS</span>
                  </a>
                </li>

                <li className={styles.navbaritem}>
                  <a href="#" className={styles.navbarlink}>
                    <span className={styles.navbarlinktext}>
                      MONSTER RANDEVU SİSTEMİ
                    </span>
                  </a>
                </li>

                <li className={styles.navbaritem}>
                  <a href="#" className={styles.navbarlink}>
                    <span className={styles.navbarlinktext}>
                      MONSTER ÇÖZÜM MERKEZİ
                    </span>
                  </a>
                </li>

                <li className={styles.navbaritem}>
                  <a
                    href="#"
                    style={{
                      color: "#FFF",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                  >
                    <span className={styles.navbarlinktext}>Windows 11</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.navbarmiddlewrapper}>
            {/* <div
          className="navbarmiddleleft"
          style={{
            backgroundColor: "red",
          }}
        >
        </div> */}
            <a href="">
              <NavbarLogo
                height={65}
                style={
                  {
                    //   width: "100%",
                  }
                }
              />
            </a>
            <div className={styles.navbarmiddleright}>
              <div className={styles.navbarcenter}>
                <div className={styles.navbarsearchbarinner}>
                  <div className={styles.navbarsearchbar}>
                    <input
                      type="text"
                      maxLength="55"
                      autoComplete="off"
                      className={styles.navbarsearchbarinput}
                      placeholder="Arama Yap"
                    />
                  </div>
                  <SearchIcon
                    style={{
                      position: "absolute",
                      // zIndex: "1",
                      // marginLeft: "px",
                      marginRight: "10px",
                      color: "#FFF",
                    }}
                  />
                </div>
              </div>

              <div className={styles.navbarright}>
                <div className={styles.navbarrightinner}>
                  <a href="">
                    <button className={styles.navbarbutton}>
                      <span
                        style={{
                          color: "#26df26",
                          lineHeight: "22px",
                          fontSize: "14px",
                        }}
                      >
                        Harici Ödeme
                      </span>
                    </button>
                  </a>
                  <a href="">
                    <button className={styles.navbarbutton}>
                      {/* <div>
                </div> */}
                      <PersonIcon
                        style={{
                          color: "000",
                          backgroundColor: "#FFF",
                          borderRadius: "50%",
                          //   marginRight: "5px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        <span>Giriş Yap</span>

                        <span
                          style={{
                            fontSize: "10px",
                            color: "#FBBD08",
                          }}
                        >
                          Kayıt Ol
                        </span>
                      </div>
                    </button>
                  </a>

                  <a href="">
                    <button className={styles.navbarbutton}>
                      {" "}
                      <ShoppingCartIcon />
                      <span>Sepetim</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
