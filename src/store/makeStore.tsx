import React, { Dispatch, ReactNode } from "react";

const StoreContext = React.createContext<any>({});
const DispatchContext = React.createContext<Dispatch<any>>(() => null);

interface IMakeStore {
  reducer: React.Reducer<any, any>;
  initialState: object;
}

export default function makeStore({ reducer, initialState }: IMakeStore) {
  const StoreProvider = ({ children }: { children: ReactNode | undefined }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };

  function useStore() {
    return React.useContext(StoreContext);
  }

  function useDispatch() {
    return React.useContext(DispatchContext);
  }
  return { StoreProvider, useDispatch, useStore };
}
