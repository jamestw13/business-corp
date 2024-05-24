import { useContext, useState } from 'react';

import Ground from './Ground';
import BuildLimit from './BuildLimit';

import { WorldContext } from './App';
import Office from './Office';
import Restroom from './Restroom';

const World = () => {
  let buildLimit = 4;
  let spaces = [];
  const { world } = useContext(WorldContext);
  if (world) {
    buildLimit = world.buildLimit;
    spaces = world.spaces;
  }

  return (
    <>
      <Ground />
      <BuildLimit buildLimit={buildLimit} />

      {spaces.map(
        (spaces, index) =>
          (spaces.type === 'office' && <Office key={index} position={spaces.position} rotation={spaces.rotation} />) ||
          (spaces.type === 'restroom' && <Restroom key={index} position={spaces.position} rotation={spaces.rotation} />)
      )}
    </>
  );
};

export default World;
