import React from "react";
import styles from "./Card.module.css";
//GEÇİCİ ÇÖZÜM
import Image from "next/image";

const Card = ({ item, index }) => {
  // console.log(item);
  // console.log(item?.smallImageUrl);
  // const src = { src: item?.smallImageUrl };
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.card}>
        {/* <div className={styles.cardimage}>      </div> */}
        {item?.smallImageUrl && (
          <Image
            src={item?.smallImageUrl}
            width={253}
            height={168}
            layout="responsive"
            priority={true}
            // srcset="(max-height: 500px) 1000px"
            sizes="253px"
            // loading="lazy"
            // loading={item?.smallImageUrl.length === index + 1 ? "eager" : "lazy"}
            objectFit="cover"
            objectPosition="center"
          />
        )}

        {/* <div className={styles.compare}>      </div> */}
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

        <div className={styles.cardinfo}>
          <div className={styles.commentwrapper}>
            <div className={styles.commentstart}></div>
            <div className={styles.commentpoint}>{item?.commentCount}</div>
            <div className={styles.commentcount}>{item?.commentCount}</div>
          </div>
          <div className={styles.cardtitle}>{item?.productName}</div>

          <div
            className={styles.carddescription}
            dangerouslySetInnerHTML={{
              __html: item?.shortDescription,
            }}
          >
            {/* <h3>{data.data.products[44].shortDescription}</h3> */}
          </div>

          {/* <div className={styles.cardprice}>        </div> */}
          <h1
            style={{
              paddingLeft: "20px",
              maxWidth: "100%",
            }}
          >
            {item?.salePrice} {item?.currency}
          </h1>

          <div
            style={{
              margin: "0 20px",
            }}
          >
            <a href="" className={styles.cardbutton}>
              {/* <span style={{ textAlign: "center" }}>Sepete Ekle</span> */}
              Sepete Ekle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
