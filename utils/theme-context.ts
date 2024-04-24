
import React from 'react';

// Create a context
interface ThemeContextType {
    projects: string[];
    toggleProjects: (sortName: string) => void;
  }
export const ThemeContext = React.createContext<ThemeContextType>({ projects: [], toggleProjects: () => {} });