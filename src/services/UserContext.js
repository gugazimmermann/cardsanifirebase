import React, { createContext, useReducer } from "react";

const intialState = { uid: null };

const UserReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, uid: action.payload };
    }
    case "LOGOUT": {
        return { ...state, uid: null };
      }
    default: {
      return state;
    }
  }
};

export const UserContext = createContext({
  state: intialState,
  dispatch: () => null,
});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducers, intialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;