import { useRef, useCallback } from "react";

const useDebounce = (debounceDelay, callback) => {
  const timeoutRef = useRef(null);

  const cleanTimout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), debounceDelay);
    },
    [debounceDelay, callback]
  );

  return {
    debouncedCallback,
    cleanTimout,
  };
};

export default useDebounce;
