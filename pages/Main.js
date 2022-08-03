import React from "react";
import Rest from "./Rest";
import Top from "./Top";

const Main = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Top />
      <Rest data={data} />
    </div>
  );
};

export default Main;
