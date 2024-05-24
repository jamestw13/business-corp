import { useContext, useState } from 'react';

import Ground from './Ground';
import BuildLimit from './BuildLimit';

import { WorldContext } from './App';
import Office from './Office';
import Restroom from './Restroom';

const World = () => {
  let buildLimitWidth = 6;
  let buildLimitHeight = 4;
  let spaces = [];
  const { world } = useContext(WorldContext);
  if (world) {
    buildLimitWidth = world.buildLimitWidth;
    buildLimitHeight = world.buildLimitHeight;
    spaces = world.spaces;
  }

  return (
    <>
      <Ground />
      <BuildLimit />

      {spaces.map(
        (spaces, index) =>
          (spaces.type === 'office' && <Office key={index} spaces={spaces} />) ||
          (spaces.type === 'restroom' && <Restroom key={index} spaces={spaces} />)
      )}
    </>
  );
};

export default World;
