import { useState } from 'react';

import Ground from './Ground';
import BuildLimit from './BuildLimit';

const World = () => {
  const [buildLimit, setBuildLimit] = useState(4);

  return (
    <>
      <Ground />
      <BuildLimit buildLimit={buildLimit} />
      <mesh position={[1, 0.5, 1]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="red" wireframe={true} />
      </mesh>
      <mesh position={[1, 1.5, 1]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="red" wireframe={true} />
      </mesh>
    </>
  );
};

export default World;
