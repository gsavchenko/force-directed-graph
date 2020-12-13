import './App.css';
import { Canvas } from 'react-three-fiber';
import Box from './components/Box';

function App() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <camera position={[0, 0, 5]} />
      <Box />
    </Canvas>
  );
}

export default App;
