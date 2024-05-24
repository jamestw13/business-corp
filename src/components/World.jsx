import Ground from './Ground';
import BuildLimit from './BuildLimit';

import { useFrame, useThree } from '@react-three/fiber';
import Space from './Spaces/Space';
import useGame from '../stores/useGame';

const World = () => {
  const spaces = useGame(state => state.spaces);

  const { camera, raycaster, mouse } = useThree();

  // useFrame(() => {
  //   if (buildLimitRef.current) {
  //     raycaster.setFromCamera(mouse, camera);
  //     const intersects = raycaster.intersectObjects([buildLimitRef.current]);

  //     if (intersects.length > 0) {
  //       console.log(intersects.map(e => e.object.userData.name));
  //       // console.log('Inside the BuildLimit box');
  //     } else {
  //       // console.log('Outside the BuildLimit box');
  //     }
  //   }
  // });

  return (
    <>
      <Ground />
      <BuildLimit />

      {spaces?.map((spaces, index) => (
        <Space key={index} spaces={spaces} />
      ))}
    </>
  );
};

export default World;
