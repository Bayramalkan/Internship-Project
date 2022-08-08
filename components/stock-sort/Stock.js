import React from "react";
import styles from "./StockSort.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionActions } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Image from "next/image";

function Stock() {
  return (
    <div className={styles.stockWrapper}>
      <div className={styles.stockWrapperLeft}>
        <HomeIcon />
        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />

        <a href="">Tüm Laptoplar</a>
        <span className={styles.stockWrapperLeftText}> </span>
        <Accordion style={{ backgroundColor: "#1B1C1D", color: "#fff" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#26df2e" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Oyun Bilgisayarları</Typography>
          </AccordionSummary>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#26df2e" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Oyun Bilgisayarları</Typography>
          </AccordionSummary>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#26df2e" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Oyun Bilgisayarları</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      <div className={styles.stockWrapperRight}></div>
    </div>
  );
}

export default Stock;
