import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Fog, Color } from 'three';
import World from './components/World';
import Interface from './Interface';

function App() {
  return (
    <>
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
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <World />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
