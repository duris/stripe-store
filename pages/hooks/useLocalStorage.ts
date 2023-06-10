import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        const valueToStore = item ? JSON.parse(item) : initialValue;
        setStoredValue(valueToStore);
      } catch (error) {
        console.warn(`Error getting local storage key ["${key}"]: `, error);
        setStoredValue(initialValue);
      }
    }
  }, [key, initialValue]);

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Error setting local storage key ["${key}"]: `, error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
