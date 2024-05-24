import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState, createContext, useRef } from 'react';
import { Fog, Color } from 'three';
import World from './components/World';
import Interface from './Interface';
import OfficeBox from './components/OfficeBox';
import { useThree, useFrame } from '@react-three/fiber';
import { WorldData } from './Data';
import GameProvider from './contexts/GameContext';

function App() {
  return (
    <GameProvider>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2, 2, 2],
        }}
        onCreated={({ gl, scene }) => {
          scene.fog = new Fog('#202020', 8, 20);
          gl.setClearColor(new Color('#202020'));
        }}
      >
        <OfficeBox />
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <World useThree={useThree} />
      </Canvas>
      <Interface />
    </GameProvider>
  );
}

export default App;
