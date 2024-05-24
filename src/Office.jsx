import { DoubleSide } from 'three';

const Office = ({ position, rotation }) => {
  return (
    <group position={[position[0], position[1] + 0.01, position[2]]} rotation={[0, (Math.PI / 2) * rotation, 0]}>
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="beige" />
      </mesh>
      {/* Cubicle walls */}
      <mesh position={[2 / 3, -0.25, -1 / 3]}>
        <planeGeometry args={[2 / 3, 0.5, 1]} />
        <meshStandardMaterial color="gray" side={DoubleSide} />
      </mesh>
      <mesh position={[-2 / 3, -0.25, -1 / 3]}>
        <planeGeometry args={[-2 / 3, 0.5, 1]} />
        <meshStandardMaterial color="gray" side={DoubleSide} />
      </mesh>
      {/* Desks */}
      <mesh position={[5 / 8, -0.75 / 2, 2 / 3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color="black" side={DoubleSide} />
      </mesh>
      <mesh position={[-5 / 8, -0.75 / 2, 2 / 3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color="black" side={DoubleSide} />
      </mesh>
      <mesh position={[5 / 8, -0.75 / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color="black" side={DoubleSide} />
      </mesh>
      <mesh position={[-5 / 8, -0.75 / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color="black" side={DoubleSide} />
      </mesh>
    </group>
  );
};
export default Office;
