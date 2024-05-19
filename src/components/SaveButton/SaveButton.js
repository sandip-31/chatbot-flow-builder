import React, { useContext } from "react";
import { FlowContext } from "../../context/FlowContext";
import "./SaveButton.css";
import { useSnackbar } from "notistack";
import strings from '../../constants/strings';

const SaveButton = () => {
  const { nodes, edges, savedNodes, setSavedNodes } = useContext(FlowContext);

  const { enqueueSnackbar } = useSnackbar();

  const handleSave = () => {
    const nodesWithNoIncomingEdges = nodes.filter(
      (node) => !edges.some((edge) => edge.target === node.id)
    );
    console.log("nodesWithNoIncomingEdges",nodesWithNoIncomingEdges)
    if (nodesWithNoIncomingEdges?.length >= 2) {
      enqueueSnackbar(strings.errors.emptyTargetHandles, {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    } else {
      setSavedNodes(nodes);
      enqueueSnackbar(strings.success.flowSaved, {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    }
  };

  return (
    <button
      className="save-button btn btn-primary text-alig"
      onClick={handleSave}
      disabled={JSON.stringify(savedNodes) === JSON.stringify(nodes)}
    >
      {strings.flowBuilder.saveButtonText}
    </button>
  );
};

export default SaveButton;
