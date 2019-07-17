import {useState} from 'react'
                            // passing 2 parameters key, initialValue
 export const useLocalStorage = (key, initialValue) => {


  const [storedValue, setStoredValue] = useState(() => {
      //  we're passing the key into the getItem method and assigning it to item
    const item = window.localStorage.getItem(key);
      // return item if item is parsed if not then return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
                  //passing value
  const setValue = value => {
    // setting the state by passing the value in it
    setStoredValue(value);
    // setting key and stringifying the value
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};