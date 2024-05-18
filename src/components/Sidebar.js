import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { FlowContext } from '../context/FlowContext';
import SettingsPanel from './SettingsPanel';
import './Sidebar.css';

const Sidebar = () => {
  const { selectedNode } = useContext(FlowContext);
  const [{ isDragging }, drag] = useDrag({
    type: 'node',
    item: { type: 'textNode' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (selectedNode) {
    return <SettingsPanel />;
  }

  return (
    <div className="sidebar">
      <div ref={drag} className="node-item">
        Text Node
      </div>
    </div>
  );
};

export default Sidebar;
