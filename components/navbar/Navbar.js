import React from "react";
import NavbarLogo from "../Logo/NavbarLogo";
import styles from "./Navbar.module.css";

// MUI Imports
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { color, style } from "@mui/system";
import NavbarBottom from "../navbar-bottom/NavbarBottom";

// TASKS
// Responsive sorunları çözülmeli.

const Navbar = () => {
  const NavbarData = [
    "0 850 255 11 11",
    "MESAJ GÖNDER",
    "MAĞAZALAR",
    "TEKNİK SERVİS",
    "MONSTER RANDEVU SİSTEMİ",
    "MONSTER ÇÖZÜM MERKEZİ",
    "Windows 11",
  ];
  return (
    <header className={styles.siteheader}>
      <div className={styles.siteheaderwrapper}>
        <div className={styles.navbartopwrapper}>
          <div className={styles.navbartopinner}>
            <ul className={styles.navbarlist}>
              {NavbarData.map((item, index) => {
                return (
                  <li className={styles.navbaritem} key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.navbarmiddlewrapper}>
          <div className={styles.navbarmiddleleft}>
            <NavbarLogo width={300} height={65} />
          </div>
          <div className={styles.navbarcenter}>
            <div className={styles.navbarsearchbarinner}>
              {/* <div className={styles.navbarsearchbar}>
                    </div> */}
              <input
                type="text"
                maxLength="55"
                autoComplete="off"
                className={styles.navbarsearchbarinput}
                placeholder="Arama Yap"
              />
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
          {/* <div className={styles.navbarmiddleright}>
                  </div> */}
          <div className={styles.navbarright}>
            {/* <div className={styles.navbarrightinner}>
                    </div> */}

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

            <button className={styles.navbarbutton}>
              {" "}
              <ShoppingCartIcon />
              Sepetim
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
