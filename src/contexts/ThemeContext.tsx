import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import { setTimeout } from 'timers';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextData {
  isDark: boolean;
  changeTheme(isDark: boolean): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {

  const [isDark, setIsDark] = useState(true);

  function changeTheme(isDark: boolean) {
    
    setIsDark(isDark);
    Cookies.set('isDark', String(isDark));
    
    const body = document.querySelector('body');
    
    if(isDark) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');  
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        changeTheme
      }}
    > 
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}