import { DoubleSide } from 'three';

const Restroom = ({ position, rotation }) => {
  return (
    <group position={[position[0], position[1] + 0.01, position[2]]} rotation={[0, (Math.PI / 2) * rotation, 0]}>
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
      {/* 
      
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
      </mesh> */}
    </group>
  );
};
export default Restroom;
