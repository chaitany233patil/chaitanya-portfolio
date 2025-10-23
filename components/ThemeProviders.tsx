"use client";

import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
