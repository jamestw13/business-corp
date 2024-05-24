import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const OfficeBox = () => {
  const { camera, raycaster, mouse } = useThree();
  const meshRef = useRef();

  useFrame(() => {
    // Update the raycaster using the mouse coordinates
    raycaster.setFromCamera(mouse, camera);

    // Check if the ray intersects the mesh
    const intersects = raycaster.intersectObject(meshRef.current);

    // If there's an intersection, change the color of the mesh
    if (intersects.length > 0) {
      meshRef.current.material.color.set('red');
    } else {
      meshRef.current.material.color.set('blue');
    }
  });

  return (
    <mesh position={[0, 0.5, 0]} ref={meshRef}>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default OfficeBox;
