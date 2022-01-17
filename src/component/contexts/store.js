import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  userData: {
    isVerified: false,
    roles: ["subscriptions_manager"],
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const checkRole = (role) => {
    return state.userData.roles.includes(role);
  };

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
