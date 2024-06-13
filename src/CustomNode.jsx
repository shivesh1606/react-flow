// CustomNode Component
import React, { memo } from "react";
import { Position } from "reactflow";
import Card from "./Card";

const CustomNode = ({ data }) => {
  return (
    <div
      style={{ background: "white", padding: 16, border: "1px solid black" }}
    >
      <Card type={data.type} Name={`Node`} />
    </div>
  );
};

export default memo(CustomNode);
