import { DoubleSide, BoxGeometry } from 'three';
import { Text } from '@react-three/drei';

const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} userData={{ ground: true }}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightgreen" side={DoubleSide} />
    </mesh>
  );
};
export default Ground;
