import {useEffect } from 'react'
import {useLocalStorage} from './useLocalStorage'

// import 
export const useTheme = () => {
        // 
  const [theme, setTheme] = useLocalStorage('dark-mode')
  useEffect(() => {
    theme
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [theme]);

  return [theme, setTheme];
}