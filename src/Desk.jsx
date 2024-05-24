import { DoubleSide } from 'three';
import { Text } from '@react-three/drei';
const Desk = ({ employee, position }) => {
  console.log(employee);
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
      <meshStandardMaterial color={employee ? 'white' : 'black'} side={DoubleSide} />
      {employee && (
        <Text position={[0, 0.3, 0]} fontSize={0.1} rotation={[0, Math.PI, 0]}>
          {employee.name}
        </Text>
      )}
    </mesh>
  );
};
export default Desk;
