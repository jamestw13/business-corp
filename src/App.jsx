import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState, useEffect, useRef, createContext } from 'react';
import { Fog, Color } from 'three';
import World from './World';
import Interface from './Interface';
// import CameraSetup from './CameraSetup';
import { useThree } from '@react-three/fiber';
import { WorldData } from './Data';

function App() {
  const [world, updateWorld] = useState(new WorldData());

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2, 2, 2],
        }}
        onCreated={({ gl, scene }) => {
          scene.fog = new Fog('#202020', 1, 5);
          gl.setClearColor(new Color('#202020'));
        }}
      >
        {/* <CameraSetup /> */}
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <axesHelper />
        <World useThree={useThree} />
      </Canvas>
      <Interface world={world} />
    </>
  );
}

export default App;
