import React, { useState, useContext, createContext } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setAcitveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setAcitveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
