import React, { useContext } from 'react';
import { FlowContext } from '../context/FlowContext';
import { validateFlow } from '../utils/validation';
import './SaveButton.css';

const SaveButton = () => {
  const { nodes, edges } = useContext(FlowContext);

  const validateAndSave = () => {
    const validationMessage = validateFlow(nodes, edges);
    if (validationMessage) {
      alert(validationMessage);
    } else {
      // Save the flow here
      console.log('Flow is valid and saved!', { nodes, edges });
    }
  };

  return (
    <button className="save-button" onClick={validateAndSave}>
      Save Flow
    </button>
  );
};

export default SaveButton;
