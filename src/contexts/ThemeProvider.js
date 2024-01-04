// ThemeProvider.js

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Function to get the initial theme based on system preferences
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDarkMode ? "dark" : "light";
    }
    // Return a default theme for SSR or environments without window object
    return "light";
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Effect to listen for changes in system preferences and update the theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setDarkMode(mediaQuery.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Function to toggle dark mode manually
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode); // Save user preference
      return newMode;
    });
  };

  // Get the applied theme (either system-based or user-selected)
  const appliedTheme = darkMode;

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode, appliedTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
