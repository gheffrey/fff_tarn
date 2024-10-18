import { useState } from "react";

const useInitializeStateOnce = (initialState) => {
  const [state, setState] = useState(initialState);
  const [initialized, setInitialized] = useState(false);

  const initializeStateOnce = (newState) => {
    if (!initialized) {
      setState(newState);
      setInitialized(true);
    }
  };

  return [state, initializeStateOnce];
};

export default useInitializeStateOnce;
