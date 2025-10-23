"use client";

import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher(props: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={
        "p-2 rounded-md text-black dark:text-white cursor-pointer " +
        props.className
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunMoon />
    </div>
  );
}
