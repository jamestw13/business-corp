import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { DoubleSide, MeshBasicMaterial } from 'three';
import { Text } from '@react-three/drei';

const Desk = ({ employee, position }) => {
  const textRef = useRef();
  console.log(employee);

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }
  });

  const textMaterial = new MeshBasicMaterial({ color: 'black', depthTest: false });

  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.1, 0.1, 0.25, 6]} />
      <meshStandardMaterial color={employee?.name ? 'white' : 'black'} side={DoubleSide} />
      {employee && (
        <Text ref={textRef} position={[0, 0.5, 0]} fontSize={0.1} material={textMaterial}>
          {employee.name}
        </Text>
      )}
    </mesh>
  );
};

export default Desk;
