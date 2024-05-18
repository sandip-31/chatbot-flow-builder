import React, { useContext } from "react";
import { FlowContext } from "../context/FlowContext";
import "./SaveButton.css";
import { useSnackbar } from "notistack";

const SaveButton = () => {
  const { nodes, edges, savedNodes, setSavedNodes } = useContext(FlowContext);

  const { enqueueSnackbar } = useSnackbar();

  const handleSave = () => {
    // const hasUnconnectedNodes = nodes.some(
    //   (node) =>
    //     !edges.some(
    //       (edge) => edge.source === node.id || edge.target === node.id
    //     )
    // );

    const nodesWithNoIncomingEdges = nodes.filter(
      (node) => !edges.some((edge) => edge.target === node.id)
    );

    // console.log("test length", nodesWithNoIncomingEdges?.length);

    if (nodesWithNoIncomingEdges?.length >= 2) {
      enqueueSnackbar("Cannot save Flow..", {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    } else {
      setSavedNodes(nodes);
      enqueueSnackbar("Flow saved successfully!", {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
      // Perform save logic here, such as sending data to a server
    }
  };

  return (
    <button
      className="save-button btn btn-primary"
      onClick={handleSave}
      disabled={JSON.stringify(savedNodes) === JSON.stringify(nodes)}
    >
      Save Flow
    </button>
  );
};

export default SaveButton;