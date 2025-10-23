import React, { createContext } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  // no-op default setter
  setTheme: () => {},
});
