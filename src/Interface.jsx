import { useContext } from 'react';
// import { CameraContext } from './App';

const Interface = ({ world }) => {
  // const cameraRef = useContext(CameraContext);

  return (
    <div className="interface">
      <h1>{world.companyName}</h1>

      <button
        onClick={() => {
          console.log('set camera');
          cameraRef.current?.position.set(2, 2, 2);
        }}
      >
        reset camera
      </button>
      <details>
        <summary>Add Space</summary>

        <button
          onClick={() => {
            console.log('add office');
          }}
        >
          Add Office
        </button>

        <button
          onClick={() => {
            console.log('add restroom');
          }}
        >
          Add Restroom
        </button>

        <button
          onClick={() => {
            console.log('add gym');
          }}
        >
          Add Gym
        </button>
        <button
          onClick={() => {
            console.log('add cafeteria');
          }}
        >
          Add Cafeteria
        </button>
      </details>
    </div>
  );
};
export default Interface;
