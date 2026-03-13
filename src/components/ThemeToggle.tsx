import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitialTheme = () => {
    if (localStorage.theme) {
      return localStorage.theme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-2 rounded-xl border transition-colors"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}