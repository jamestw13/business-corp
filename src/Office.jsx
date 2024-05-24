import { DoubleSide } from 'three';

const Office = ({ spaces }) => {
  const { position, rotation, desk1, desk2, desk3, desk4 } = spaces;
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
      <mesh position={[0, -0.25, 1]}>
        <planeGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="gray" side={DoubleSide} />
      </mesh>
      <mesh position={[1, -0.25, 1 / 3]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4 / 3, 0.5, 1]} />
        <meshStandardMaterial color="gray" side={DoubleSide} />
      </mesh>
      <mesh position={[-1, -0.25, 1 / 3]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4 / 3, 0.5, 1]} />
        <meshStandardMaterial color="gray" side={DoubleSide} />
      </mesh>
      {/* Desks */}
      {/* Desk1 */}
      <mesh position={[5 / 8, -0.75 / 2, 2 / 3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desk1 ? 'white' : 'black'} side={DoubleSide} />
      </mesh>
      <mesh position={[-5 / 8, -0.75 / 2, 2 / 3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desk2 ? 'white' : 'black'} side={DoubleSide} />
      </mesh>
      <mesh position={[5 / 8, -0.75 / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desk3 ? 'white' : 'black'} side={DoubleSide} />
      </mesh>
      <mesh position={[-5 / 8, -0.75 / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desk4 ? 'white' : 'black'} side={DoubleSide} />
      </mesh>
    </group>
  );
};
export default Office;
