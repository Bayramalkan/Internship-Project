import React from "react";
import styles from "./StockSort.module.css";
import HomeIcon from "@mui/icons-material/Home";
import Checkbox from "@mui/material/Checkbox";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionActions } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Image from "next/image";

function Stock({ check }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className={styles.stockWrapper}>
      <div className={styles.stockWrapperLeft}>
        <HomeIcon />
        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />

        <a href="">Tüm Laptoplar</a>
        <span className={styles.stockWrapperLeftText}> </span>
        {/* <Accordion style={{ backgroundColor: "#1B1C1D", color: "#fff" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#26df2e" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Oyun Bilgisayarları</Typography>
          </AccordionSummary>

          <Typography>Oyun Bilgisayarları</Typography>

          <Typography>Oyun Bilgisayarları</Typography>
        </Accordion> */}
      </div>
      <div className={styles.stockWrapperRight}>
        {" "}
        <Checkbox
          onClick={check}
          id="checkbox"
          sx={{
            // color: "#000",
            border: "2px solid #a4a4a5",
            borderRadius: "0",
            maxWidth: "18px",
            maxHeight: "18px",
            float: "right",
            marginRight: "20px",
            // color: "#a4a4a5",

            "&.Mui-checked": {
              color: "#26df2e",
              backgroundColor: "#000",
              borderRadius: "0",
            },
          }}
          {...label}
        />
        <label
          htmlFor="checkbox"
          style={{
            color: "#a4a4a5",
          }}
        >
          {" "}
          Stoktakiler
        </label>
      </div>
    </div>
  );
}

export default Stock;
