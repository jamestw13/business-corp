import { BoxGeometry } from 'three';
import { Text } from '@react-three/drei';

import useGame from '../stores/useGame';

const BuildLimit = () => {
  const buildWidthLimit = useGame(state => state.buildWidthLimit);
  const buildHeightLimit = useGame(state => state.buildHeightLimit);
  return (
    <>
      {/* Transparent box for raycasting */}
      <mesh position={[0, buildHeightLimit / 2, 0]} userData={{ name: 'BuildLimitBox' }}>
        <boxGeometry attach="geometry" args={[buildWidthLimit, buildHeightLimit, buildWidthLimit]} />
        <meshBasicMaterial attach="material" transparent opacity={0} />
      </mesh>

      <lineSegments position={[0, buildHeightLimit / 2, 0]}>
        <edgesGeometry attach="geometry" args={[new BoxGeometry(buildWidthLimit, buildHeightLimit, buildWidthLimit)]} />
        <lineDashedMaterial attach="material" color="#f0f0f0" />
      </lineSegments>

      <Text
        position={[0, 0.001, buildWidthLimit / 2 + 0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>

      <Text
        position={[buildWidthLimit / 2 + 0.05, 0.001, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[0, 0.001, -buildWidthLimit / 2 - 0.05]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[-buildWidthLimit / 2 - 0.05, 0.001, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[0, 0.001, buildWidthLimit / 2 + 0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[0, 0.001, buildWidthLimit / 2 + 0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[0, 0.001, buildWidthLimit / 2 + 0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[0, 0.001, buildWidthLimit / 2 + 0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
    </>
  );
};

export default BuildLimit;
