import React, { createContext, useState } from 'react';
import { WorldData } from '../Data';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [world, setWorld] = useState(new WorldData());

  return <GameContext.Provider value={{ world, setWorld }}>{children}</GameContext.Provider>;
};
export default GameProvider;
