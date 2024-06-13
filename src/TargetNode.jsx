// TargetNode.js
import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Card from "./Card";

const TargetNode = ({ data }) => {
  return (
    <div >
      <Card type="Destination" Name={data.label} />

      <Handle
        type="target"
        position={Position.Left}
      />
    </div>
  );
};

export default memo(TargetNode);
