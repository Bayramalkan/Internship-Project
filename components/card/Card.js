import React from "react";
import styles from "./Card.module.css";
const Card = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.container}>
      <div className={styles.cardwrapper}>
        <div className={styles.cardimage}>
          <img
            src={item?.smallImageUrl}
            alt="product"
            // style={{
            //   width: "300px",
            //   height: "199px",
            // }}
          />
        </div>
        <div className={styles.compare}>
          <div className={styles.comparewrapper}>
            <input type="checkbox" id="checkbox" className={styles.checkbox} />
            <label
              htmlFor="checkbox"
              className={styles.checkboxlabel}
              style={{
                marginTop: "3px",
                marginLeft: "10px",
              }}
            >
              Karşılaştır
            </label>
          </div>
        </div>

        <div className={styles.cardinfo}>
          <div className={styles.commentwrapper}>
            <div className={styles.commentstart}></div>
            <div className={styles.commentpoint}>{item?.commentCount}</div>
            <div className={styles.commentcount}>{item?.commentCount}</div>
          </div>
          <div
            className={styles.cardtitle}
            style={{
              marginLeft: "20px",
            }}
          >
            <h3>{item?.productName}</h3>
          </div>

          <div
            className={styles.carddescription}
            // style={{
            //   overflow: "hidden",
            //   textOverflow: "ellipsis",
            //   whiteSpace: "nowrap",
            //   fontSize: "14px",
            //   color: "#a4a4a5",
            //   marginLeft: "-20px",
            //   listStylePosition: "inside",
            //   opacity: "1",
            // }}
            dangerouslySetInnerHTML={{
              __html: item?.shortDescription,
            }}
          >
            {/* <h3>{data.data.products[44].shortDescription}</h3> */}
          </div>

          <div className={styles.cardprice}>
            <h1>
              {item?.salePrice} {item?.currency}
            </h1>
          </div>
          <div
            style={{
              margin: "0 20px",
            }}
          >
            <a href="" className={styles.cardbutton}>
              <span style={{ textAlign: "center" }}>Sepete Ekle</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
