import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Category.module.css";
import { AccordionActions } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Image from "next/image";

function Filter({ filterGroupName }) {
  return (
    <div className={styles.filterWrapper}>
      {" "}
      {/* <Accordion
        style={{
          backgroundColor: "#1B1C1D",
          color: "#A4A4A5",
          border: "1px solid #323334",
          margin: "0",

          // width: "100%",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: "#26df2e",
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{filterGroupName}</Typography>
        </AccordionSummary>

        <Typography>Semruk S7</Typography>
      </Accordion> */}
      {filterGroupName.map((filter, index) => (
        <div key={index} className={styles.filter}>
          {filter}
        </div>
      ))}
    </div>
  );
}

export default Filter;
