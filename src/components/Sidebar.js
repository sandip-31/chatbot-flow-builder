import React, { useContext } from 'react';
import NodesPanel from './NodesPanel';
import SettingsPanel from './SettingsPanel';
import { FlowContext } from '../context/FlowContext';
import './Sidebar.css';

const Sidebar = () => {
  const { selectedNode } = useContext(FlowContext);

  return (
    <div className="sidebar">
      {selectedNode ? <SettingsPanel /> : <NodesPanel />}
    </div>
  );
};

export default Sidebar;
