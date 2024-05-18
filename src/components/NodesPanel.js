import React from 'react';
import { useDrag } from 'react-dnd';
import './NodesPanel.css';

const NodesPanel = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'node',
    item: { type: 'textNode' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className="nodes-panel">
      <div ref={drag} className={`node-item ${isDragging ? 'dragging' : ''}`}>
        Text Node
      </div>
    </div>
  );
};

export default NodesPanel;
