import React from 'react';
import { Handle } from 'reactflow';
import './TextNode.css';

const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <Handle type="target" position="top" />
      <div className="text-node-content">{data.label}</div>
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default TextNode;
