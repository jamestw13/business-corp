import Office from './Office';
import Restroom from './Restroom';

const Space = ({ spaces }) => {
  return (
    (spaces.type === 'office' && <Office spaces={spaces} />) ||
    (spaces.type === 'restroom' && <Restroom spaces={spaces} />)
  );
};
export default Space;
