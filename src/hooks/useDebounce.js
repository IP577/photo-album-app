import { useRef } from "react";

const useDebounce = (dobounceDelay, onSearch) => {
  const debounceFuncRef = useRef(debounceSearch(dobounceDelay, onSearch));

  return {
    callDebounceFunction: debounceFuncRef.current,
    clearTimout: debounceFuncRef.current.clearTimer,
  };
};

const debounceSearch = (delay, callback) => {
  let timeoutId;
  function timeoutLogic(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => callback(...args), delay);
  }

  timeoutLogic.clearTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return timeoutLogic;
};

export default useDebounce;
