import { DoubleSide } from 'three';

const Restroom = ({ spaces }) => {
  const { position, rotation, ref } = spaces;
  return (
    <group
      ref={ref}
      position={[position[0], position[1] + 0.01, position[2]]}
      rotation={[0, (Math.PI / 2) * rotation, 0]}
      userData={{ name: 'Restroom' }}
    >
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="beige" />
      </mesh>
      {/* Cubicle walls */}
      <mesh position={[0, 0, 2 / 6]}>
        <boxGeometry args={[2, 1 - 0.01, 8 / 6]} />
        <meshStandardMaterial color="gainsboro" side={DoubleSide} />
      </mesh>
      <mesh position={[0, -1 / 6, -2 / 6 - 0.01]}>
        <planeGeometry args={[1 / 3, 2 / 3]} />
        <meshStandardMaterial color="gray" side={DoubleSide} />
      </mesh>
    </group>
  );
};
export default Restroom;
