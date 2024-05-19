import React from "react";
import { DndProvider } from "react-dnd";
import { SnackbarProvider } from "notistack";
import { HTML5Backend } from "react-dnd-html5-backend";
import FlowBuilder from "./components/FlowBuilder";
import Sidebar from "./components/Sidebar";
import SaveButton from "./components/SaveButton";
import { FlowContextProvider } from "./context/FlowContext";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";

const App = () => {
  return (
    <SnackbarProvider>
      <DndProvider backend={HTML5Backend}>
        <FlowContextProvider>
          <div className="d-flex">
            <FlowBuilder />
            <Sidebar />
          </div>
          <SaveButton />
        </FlowContextProvider>
      </DndProvider>
    </SnackbarProvider>
  );
};

export default App;