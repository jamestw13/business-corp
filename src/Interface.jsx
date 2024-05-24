import useGame from './stores/useGame';

const Interface = () => {
  const companyName = useGame(state => state.companyName);
  const balance = useGame(state => state.balance);

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="interface">
      <h1>{companyName}</h1>
      <h2>{formatter.format(balance)}</h2>

      <button
        onClick={() => {
          console.log('set camera');
          // cameraRef.current?.position.set(2, 2, 2);
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
