import { createContext } from 'react';


interface ThemeContextProps {
  theme: string | null;
  toggleTheme: () => void;
  isToggled: boolean
}


export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light', 
  toggleTheme: () => {}, 
  isToggled: false
});


