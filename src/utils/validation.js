export const validateFlow = (nodes, edges) => {
    let valid = true;
    let errorMessage = '';
  
    nodes.forEach((node) => {
      const hasOutgoingEdges = edges.some((edge) => edge.source === node.id);
      if (!hasOutgoingEdges) {
        valid = false;
        errorMessage += `Node ${node.id} has no outgoing edges!\n`;
      }
    });
  
    return valid ? null : errorMessage;
  };
  