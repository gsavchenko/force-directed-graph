import './App.css';
import { Canvas } from 'react-three-fiber';
import Patricle from './components/Patricle';
import * as THREE from 'three';
import { useRef } from "react";

function App() {
  const camera = useRef(new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ));

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} camera={camera}>
      <Patricle />
    </Canvas>
  );
}

export default App;
