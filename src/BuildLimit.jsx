import { DoubleSide, BoxGeometry } from 'three';
import { Text } from '@react-three/drei';

const BuildLimit = ({ buildLimit }) => {
  return (
    <>
      <lineSegments position={[0, buildLimit / 2, 0]}>
        <edgesGeometry attach="geometry" args={[new BoxGeometry(buildLimit, buildLimit, buildLimit)]} />
        <lineDashedMaterial attach="material" color="#f0f0f0" />
      </lineSegments>

      <Text position={[0, 0.001, buildLimit / 2 + 0.05]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.1} color="#f0f0f0">
        Build limit
      </Text>

      <Text
        position={[buildLimit / 2 + 0.05, 0.001, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[0, 0.001, -buildLimit / 2 - 0.05]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text
        position={[-buildLimit / 2 - 0.05, 0.001, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        fontSize={0.1}
        color="#f0f0f0"
      >
        Build limit
      </Text>
      <Text position={[0, 0.001, buildLimit / 2 + 0.05]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.1} color="#f0f0f0">
        Build limit
      </Text>
      <Text position={[0, 0.001, buildLimit / 2 + 0.05]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.1} color="#f0f0f0">
        Build limit
      </Text>
      <Text position={[0, 0.001, buildLimit / 2 + 0.05]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.1} color="#f0f0f0">
        Build limit
      </Text>
      <Text position={[0, 0.001, buildLimit / 2 + 0.05]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.1} color="#f0f0f0">
        Build limit
      </Text>
    </>
  );
};

export default BuildLimit;
