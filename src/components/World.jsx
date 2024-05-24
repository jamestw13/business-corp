import { useContext, useState } from 'react';

import Ground from './Ground';
import BuildLimit from './BuildLimit';

import { GameContext } from '../contexts/GameContext';
import Office from './Spaces/Office';
import Restroom from './Spaces/Restroom';

const World = () => {
  let buildLimitWidth = 6;
  let buildLimitHeight = 4;
  let spaces = [];
  const { world } = useContext(GameContext);

  if (world) {
    buildLimitWidth = world.buildLimitWidth;
    buildLimitHeight = world.buildLimitHeight;
    spaces = world.spaces;
  }

  return (
    <>
      <Ground />
      <BuildLimit />

      {spaces?.map(
        (spaces, index) =>
          (spaces.type === 'office' && <Office key={index} spaces={spaces} />) ||
          (spaces.type === 'restroom' && <Restroom key={index} spaces={spaces} />)
      )}
    </>
  );
};

export default World;
