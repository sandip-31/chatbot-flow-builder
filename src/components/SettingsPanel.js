import React, { useContext, useState, useEffect } from 'react';
import { FlowContext } from '../context/FlowContext';
import './SettingsPanel.css';

const SettingsPanel = () => {
  const { selectedNode, setNodes, setSelectedNode } = useContext(FlowContext);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (selectedNode) {
      setLabel(selectedNode.data.label);
    }
  }, [selectedNode]);

  const updateNodeLabel = (event) => {
    setLabel(event.target.value);
  };

  const saveChanges = () => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === selectedNode.id) {
          node.data = { ...node.data, label };
        }
        return node;
      })
    );
    setSelectedNode(null);
  };

  if (!selectedNode) return null;

  return (
    <div className="settings-panel">
      <h3>Settings</h3>
      <input
        type="text"
        value={label}
        onChange={updateNodeLabel}
        className="settings-input"
      />
      <button onClick={saveChanges} className="settings-save-button">
        Save
      </button>
    </div>
  );
};

export default SettingsPanel;
