import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState, createContext } from 'react';
import { Fog, Color } from 'three';
import World from './World';
import Interface from './Interface';
import { useThree } from '@react-three/fiber';
import { WorldData } from './Data';

export const WorldContext = createContext();
function App() {
  const [world, updateWorld] = useState(new WorldData());

  return (
    <WorldContext.Provider value={{ world, updateWorld }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2, 2, 2],
        }}
        onCreated={({ gl, scene }) => {
          scene.fog = new Fog('#202020', 5, 10);
          gl.setClearColor(new Color('#202020'));
        }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <World useThree={useThree} />
      </Canvas>
      <Interface world={world} />
    </WorldContext.Provider>
  );
}

export default App;
