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

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <Accordion
        style={{
          backgroundColor: "#1B1C1D",
          color: "#fff",

          // border: "1px solid #26df2e",
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>KATEGORİLER</Typography>
        </AccordionSummary>
        <Accordion
          style={{
            backgroundColor: "#1B1C1D",
            color: "#fff",
            border: "1px solid #323334",
            // padding: "10px 0px 10px 10px",
            // marginLeft: "10px",
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
            <Typography>Tüm Laptoplar</Typography>
          </AccordionSummary>
          <Accordion
            style={{
              backgroundColor: "#1B1C1D",
              color: "#fff",
              border: "1px solid #323334",
              margin: "0",

              width: "100%",
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
              <Typography>Oyun Bilgisayarları</Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
              <Typography>Abra</Typography>
            </AccordionDetails> */}

            <Accordion
              style={{
                backgroundColor: "#1B1C1D",
                color: "#fff",
                border: "1px solid #323334",
                margin: "0",

                width: "100%",
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
                <Typography>Abra</Typography>
              </AccordionSummary>

              <Typography>Abra A5</Typography>

              <Typography>Abra A7</Typography>
            </Accordion>

            <Accordion
              style={{
                backgroundColor: "#1B1C1D",
                color: "#A4A4A5",
                border: "1px solid #323334",
                margin: "0 ",

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
                <Typography>Tulpar</Typography>
              </AccordionSummary>

              <Typography>Tulpar T5</Typography>

              <Typography>Tulpar T7</Typography>
            </Accordion>

            <Accordion
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
                <Typography>Semruk</Typography>
              </AccordionSummary>

              <Typography>Semruk S7</Typography>
            </Accordion>
          </Accordion>

          <Accordion
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
              <Typography>İş İstasyonları</Typography>
            </AccordionSummary>
            <Accordion
              style={{
                backgroundColor: "#1B1C1D",
                color: "#A4A4A5",
                border: "1px solid #323334",
                margin: "0",
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
                <Typography>Markut</Typography>
              </AccordionSummary>

              <Typography>Markut M7</Typography>
            </Accordion>
          </Accordion>

          <Accordion
            style={{
              backgroundColor: "#1B1C1D",
              color: "#fff",
              border: "1px solid #323334",
              margin: "0",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{
                    color: "#26df2e",

                    // transformOrigin: "bottom left",
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              {/* <Image
                src={
                  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8cGF0aCBpZD0iUGF0aF80ODI2IiBkYXRhLW5hbWU9IlBhdGggNDgyNiIgZmlsbD0ibm9uZSIgZD0iTTAsMEgyMFYyMEgwWiIvPgogIDxwYXRoIGlkPSJQYXRoXzQ4MjciIGRhdGEtbmFtZT0iUGF0aCA0ODI3IiBmaWxsPSJsaW1lIiBkPSJNNy4xNzUsOC41OSwxMSwxMi40MDcsMTQuODI1LDguNTksMTYsOS43NjVsLTUsNS01LTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMS40MzIpIi8"
                }
                width="100px"
                height="100%"
              /> */}
              <Typography>İş Bilgisayarları</Typography>
            </AccordionSummary>

            <Accordion
              style={{
                backgroundColor: "#1B1C1D",
                color: "#A4A4A5",
                border: "1px solid #323334",
                margin: "0",
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
                <Typography>Huma</Typography>
              </AccordionSummary>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "right",
                }}
              >
                <Typography>Huma H4</Typography>
                <Typography>Huma H6</Typography>
              </div>
            </Accordion>
          </Accordion>
        </Accordion>
      </Accordion>
    </div>
  );
};

export default Category;
