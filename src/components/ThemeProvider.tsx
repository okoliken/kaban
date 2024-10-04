import { useState, useEffect, ReactNode } from "react";
import { ThemeContext } from "../themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize the theme state directly from localStorage
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const [isToggled, setToggled] = useState<boolean>(
    () => {
        return theme === 'dark' ? true : false;
    }
  )

  // Apply the current theme and persist to localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Theme toggling function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setToggled(!isToggled)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isToggled }}>
      {children}
    </ThemeContext.Provider>
  );
};
