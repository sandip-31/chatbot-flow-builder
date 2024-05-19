import React, { useContext, useRef } from "react";
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  Controls,
  Background,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { useDrop } from "react-dnd";
import { FlowContext } from "../../context/FlowContext";
import TextNode from "../nodes/TextNode";
import "./FlowBuilder.css";
import { useSnackbar } from "notistack";
import strings from '../../constants/strings';

const nodeTypes = {
  textNode: TextNode,
};

const FlowBuilder = () => {
  const { nodes, setNodes, edges, setEdges, setSelectedNode } =
    useContext(FlowContext);
  const dropRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const onNodesChange = (changes) =>
    setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));

  // Enhanced onConnect function
  const onConnect = (params) => {
    const { source, target } = params;

    // Check if there is already an edge from the source handle
    const sourceHasEdge = edges.some((edge) => edge.source === source);
    if (sourceHasEdge) {
      enqueueSnackbar(strings.errors.oneEdgeFromSource, {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
      return;
    }

    // Allow connection if the rules are followed
    setEdges((eds) => addEdge(params, eds));
  };

  const [{ isOver }, drop] = useDrop({
    accept: "node",
    drop: (item, monitor) => {
      if (!dropRef.current) return;
      const offset = monitor.getClientOffset();
      const position = dropRef.current.getBoundingClientRect();
      const newNode = {
        id: `${item.type}-${nodes.length}`,
        type: item.type,
        position: {
          x: offset.x - position.left - 120,
          y: offset.y - position.top - 35,
        },
        data: { label: strings.flowBuilder.newTextNodeLabel },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      };
      setNodes((nds) => [...nds, newNode]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drop(dropRef);

  return (
    <div className="flow-builder" ref={dropRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(event, node) => setSelectedNode(node)}
        nodeTypes={nodeTypes}
        // fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowBuilder;
