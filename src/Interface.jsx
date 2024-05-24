import { useContext } from 'react';
import { WorldContext } from './App';

const Interface = () => {
  let balance = 0;
  const { world } = useContext(WorldContext);
  if (world) {
    balance = world.balance;
  }
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="interface">
      <h1>{world.companyName}</h1>
      <h2>{formatter.format(balance)}</h2>
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
