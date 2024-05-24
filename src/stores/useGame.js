import { create } from 'zustand';
import { randFullName } from '@ngneat/falso';

const state = {
  companyName: 'Acme Corporation',
  balance: 7500,
  buildHeightLimit: 4,
  buildWidthLimit: 6,
  pause: true,
  mode: 'view',

  spaces: [],
};

export default create(() => {
  addSpace('restroom', 1, -1, 1, 3);
  addSpace('office', 1, 1, 1, 0);
  addSpace('office', 1, 1, -1, 2);

  addEmployee('worker', 1, 1);
  addEmployee('worker', 2, 0);
  addEmployee('worker', 2, 3);

  return state;
});

function addSpace(type, floor, posX, posZ, rotation) {
  switch (type) {
    case 'office':
      state.spaces.push({
        type: 'office',
        position: [posX, floor - 0.5, posZ],
        rotation: rotation,
        desks: { 1: {}, 2: {}, 3: {}, 4: {} },
      });
      break;
    case 'restroom':
      state.spaces.push({ type: 'restroom', position: [posX, floor - 0.5, posZ], rotation });
      break;
    default:
      break;
  }
}

function addEmployee(type, office, desk) {
  state.spaces[office].desks[desk] = { type, name: randFullName(), wage: 4, happiness: 6 };
}
