// App Component
import { useState, useCallback } from 'react';
import './App.css';
import 'reactflow/dist/style.css';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Position
} from 'reactflow';
import SourceNode from './SourceNode';
import TargetNode from './TargetNode';
import Card from './Card';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: "Node 1" }, sourcePosition: Position.Right, targetPosition: Position.Right, type: 'source' },
  { id: '2', position: { x: 800, y: 100 }, data: { label: "Node 2" }, sourcePosition: Position.Left, targetPosition: Position.Left, type: 'target' },
  {
    id: '3',
    position: { x: 0, y: 200 },
    data: { label: "Node 3" },
    sourcePosition: Position.Right,
    type: 'source'
  }
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {
  source: SourceNode,
  target: TargetNode
};

function App() {
  const [count, setCount] = useState(3);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      const { source, target } = params;
      console.log(source, target);
      // Prevent self-connections
      if (source === target) return;

      // Get source and target nodes
      const sourceNode = nodes.find((node) => node.id === source);
      const targetNode = nodes.find((node) => node.id === target);

      // Check if source and target types are the same
      const sourceType = sourceNode.type;
      const targetType = targetNode.type;
      console.log(sourceType, targetType);
      if (sourceType === targetType) return;

      // Add the edge
      setEdges((eds) => addEdge(params, eds));
    },
    [nodes, setEdges]
  );

  const addNode = () => {
    const newNodeId = `node_${count + 1}`;
    const newNodeType = count % 2 === 0 ? 'source' : 'target'; // Alternate between Source and Destination
    const newNodePosition = newNodeType === 'source' ? Position.Right : Position.Left;
    setNodes((nds) => [
      ...nds,
      {
        id: newNodeId,
        position: { x: 100, y: 100 },
        data: { label: `Node ${count + 1}` },
        sourcePosition: newNodePosition,
        targetPosition: newNodePosition,
        type: newNodeType
      },
    ]);
    setCount(count + 1);
  };

  return (
    <>
      <div className='controls' style={{ height: '10vh', width: '90vw',
        display: 'flex', justifyContent: 'space-between',
        margin: '10px', paddingLeft: '100px',
        paddingRight: '100px' }}
        >
        <button className='addNode' onClick={addNode}>
          Add  {count%2==1?'Destination':'Source'} Node 
        </button>

      </div>
      <div style={{ height: '90vh', width: '90vw' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes} // Register custom node component
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
