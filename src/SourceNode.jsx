// SourceNode.js
import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Card from "./Card";

const SourceNode = ({ data }) => {
  return (
    <div>
      <Card type="Source" Name={data.label} />
      <Handle
        type="source"
        position={Position.Right}
      />

    </div>
  );
};

export default memo(SourceNode);
