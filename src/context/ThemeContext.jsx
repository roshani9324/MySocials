import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const themes = [
  {
    id: "aurora-noir",
    name: "Aurora Noir",
    colors: ["#0B1020", "#7C3AED", "#22D3EE"],
  },
  {
    id: "nebula",
    name: "Nebula",
    colors: ["#120A2A", "#8B5CF6", "#EC4899"],
  },
  {
    id: "vivid-indigo",
    name: "Vivid Indigo",
    colors: ["#0F172A", "#4F46E5", "#818CF8"],
  },
  {
    id: "midnight-slate",
    name: "Midnight Slate",
    colors: ["#0F172A", "#334155", "#94A3B8"],
  },
  {
    id: "onyx-gold",
    name: "Onyx & Gold",
    colors: ["#090909", "#D4AF37", "#F5D76E"],
  },
  {
    id: "space-electric",
    name: "Space Electric",
    colors: ["#050B18", "#2563EB", "#38BDF8"],
  },
  {
    id: "space-teal",
    name: "Space Teal",
    colors: ["#061A1A", "#0F766E", "#2DD4BF"],
  },
  {
    id: "space-frost",
    name: "Space Frost",
    colors: ["#08111F", "#64748B", "#CBD5E1"],
  },
  {
    id: "pinterest-dark",
    name: "Pinterest Dark",
    colors: ["#0D0D0D", "#E60023", "#FF5A70"],
  },
  {
    id: "noir-academia",
    name: "Noir Academia",
    colors: ["#171411", "#6B5848", "#D6B98C"],
  },
  {
    id: "obsidian-platinum",
    name: "Obsidian Platinum",
    colors: ["#080808", "#71717A", "#E4E4E7"],
  },
  {
    id: "emerald-gold",
    name: "Emerald Gold",
    colors: ["#07140F", "#047857", "#D4AF37"],
  },
  {
    id: "sapphire-champagne",
    name: "Sapphire Champagne",
    colors: ["#07111F", "#2563EB", "#F3D19C"],
  },
  {
    id: "burgundy-brass",
    name: "Burgundy Brass",
    colors: ["#1A080D", "#7F1D1D", "#C5A059"],
  },
  {
    id: "onyx-rose-gold",
    name: "Onyx Rose Gold",
    colors: ["#090909", "#BE7B8A", "#E8B4B8"],
  },
];

const STORAGE_KEY = "mysocials-theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "aurora-noir";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const changeTheme = (themeId) => {
    const exists = themes.some((item) => item.id === themeId);

    if (exists) {
      setTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
