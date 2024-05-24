import { DoubleSide } from 'three';
import Desk from './Desk';

const Office = ({ spaces }) => {
  const { position, rotation, desks } = spaces;
  console.log(desks);
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
      <Desk employee={desks[0]} position={[5 / 8, -0.75 / 2, 2 / 3]} />
      <Desk employee={desks[1]} position={[-5 / 8, -0.75 / 2, 2 / 3]} />
      <Desk employee={desks[2]} position={[5 / 8, -0.75 / 2, 0]} />
      <Desk employee={desks[3]} position={[-5 / 8, -0.75 / 2, 0]} />

      {/* Desk1 */}
      {/* <mesh position={[5 / 8, -0.75 / 2, 2 / 3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desks[0] ? 'white' : 'black'} side={DoubleSide} />
      </mesh> */}
      {/* <mesh position={[-5 / 8, -0.75 / 2, 2 / 3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desks[1] ? 'white' : 'black'} side={DoubleSide} />
      </mesh> */}
      {/* <mesh position={[5 / 8, -0.75 / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desks[2] ? 'white' : 'black'} side={DoubleSide} />
      </mesh> */}
      {/* <mesh position={[-5 / 8, -0.75 / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
        <meshStandardMaterial color={desks[3] ? 'white' : 'black'} side={DoubleSide} />
      </mesh> */}
    </group>
  );
};
export default Office;
