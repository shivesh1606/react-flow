// CustomHandle Component (if needed)
import React, { memo } from "react";
import { Position } from "reactflow";
import { getConnectedEdges, Handle, useNodeId, useStore } from 'reactflow';

const CustomHandle = (props) => {
  return (
    <Handle
      type={props.type}
      position={props.position}
    //   style={{ background: "#000", width: 8, height: 8, borderRadius: "50%" }}
      isConnectable={props.isConnectable}
    />
  );
};

export default memo(CustomHandle);
