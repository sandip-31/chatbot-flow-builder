import React from "react";
import { Handle, Position } from "reactflow";
import "./TextNode.css";

const TextNode = ({ data, selected }) => {
  return (
    <div
      className="text-node card shadow-sm"
      style={{ border: selected ? "1px solid blue" : "" }}
    >
      <Handle type="target" position={Position.Left} className="handle" />
      <div className="card-body">
        <input
          type="text"
          value={data.label}
          className="form-control"
          readOnly
        />
      </div>
      <Handle type="source" position={Position.Right} className="handle" />
    </div>
  );
};

export default TextNode;