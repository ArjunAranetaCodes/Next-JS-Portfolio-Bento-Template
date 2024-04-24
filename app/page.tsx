"use client";

import NavBar from "@/components/nav_bar";
import { BentoGridDemo } from "@/components/portfolio_grid";
import React, { useState, useContext } from "react";
import { ThemeContext } from "@/utils/theme-context";

// Create a provider
const ThemeProvider = ({ children }: any) => {
  const [projects, setProjects] = useState(["1", "2", "3", "4", "5", "6", "7"]);

  const toggleProjects = (sortName: string) => {
    //setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(sortName);

    switch (sortName) {
      case "All":
        setProjects([
          "1, show",
          "2, show",
          "3, show",
          "4, show",
          "5, show",
          "6, show",
          "7, show",
        ]);
        break;
      case "About":
      case "Contact":
        setProjects([
          "2, show",
          "3, show",
          "1, partial",
          "2, partial",
          "3, partial",
          "4, partial",
          "5, partial",
        ]);
        break;
      case "React":
        setProjects([
          "1, show",
          "5, show",
          "6, show",
          "2, partial",
          "3, partial",
          "4, partial",
          "7, partial",
        ]);
        break;
      case "Java":
        setProjects([
          "7, show",
          "2, partial",
          "1, partial",
          "3, partial",
          "4, partial",
          "5, partial",
          "6, partial",
        ]);
        break;
      default:
        setProjects([
          "1, show",
          "2, show",
          "3, show",
          "4, show",
          "5, show",
          "6, show",
          "7, show",
        ]);
    }
  };

  return (
    <ThemeContext.Provider value={{ projects, toggleProjects }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <NavBar />
      <BentoGridDemo />
    </ThemeProvider>
  );
}
