import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import './styles/index.css';
import FlowBuilder from './components/FlowBuilder';
import Sidebar from './components/Sidebar';
import SaveButton from './components/SaveButton';
import { FlowContextProvider } from './context/FlowContext';

function App() {
  return (
    <ReactFlowProvider>
      <FlowContextProvider>
        <div className="app">
          <FlowBuilder />
          <Sidebar />
        </div>
        <SaveButton />
      </FlowContextProvider>
    </ReactFlowProvider>
  );
}

export default App;
