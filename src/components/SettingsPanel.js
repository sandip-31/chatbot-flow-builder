import React, { useContext, useEffect, useState } from "react";
import { FlowContext } from "../context/FlowContext";
import "./SettingsPanel.css";

const SettingsPanel = () => {
  const { selectedNode, nodes, setNodes, setSelectedNode } =
    useContext(FlowContext);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (selectedNode) {
      setLabel(selectedNode.data.label);
    }
  }, [selectedNode]);

  const handleSave = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, label } }
          : node
      )
    );
    setSelectedNode(null);
  };

  if (!selectedNode) return null;

  return (
    <div className="settings-panel">
      <div className="form-group">
        <label>Node Label</label>
        <input
          type="text"
          className="form-control"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default SettingsPanel;