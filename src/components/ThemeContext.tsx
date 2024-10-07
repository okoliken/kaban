import { createContext, useState } from "react";

type Theme = "light" | "dark";

export const ThemeContext = createContext<{
  theme: string | null;
  toggleTheme: () => void;
}>({
  theme: "",
  toggleTheme: () => {},
});

const savedTheme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme") as Theme)
  : null;
  
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [theme, setTheme] = useState<Theme>(savedTheme);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
