import React from "react";
import { Handle } from "reactflow";
import "./TextNode.css";

const TextNode = ({ data }) => {
  return (
    <div className="text-node card">
      <Handle type="target" position="top" className="bg-primary" />
      <div className="card-body text-node-content">{data.label}</div>
      <Handle type="source" position="bottom" className="bg-primary" />
    </div>
  );
};

export default TextNode;
