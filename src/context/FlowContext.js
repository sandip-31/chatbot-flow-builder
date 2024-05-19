import React, { createContext, useState } from "react";

export const FlowContext = createContext();

export const FlowContextProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [savedNodes, setSavedNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <FlowContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        selectedNode,
        setSelectedNode,
        savedNodes,
        setSavedNodes,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};