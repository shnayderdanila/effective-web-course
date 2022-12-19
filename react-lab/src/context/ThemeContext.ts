import { createContext } from 'react';

interface AppThemeModeInterface {
  mode: string;
  setMode(mode: string): void;
}

// Theme for switch light, dark mode
export const ThemeMode = createContext<AppThemeModeInterface | null>(null);
