import { ThemeContext } from "@/utils/theme-context";
import React, { useContext } from "react";

const NavBar = () => {
  const { projects, toggleProjects } = useContext(ThemeContext);


  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => toggleProjects("All")}
          >
            All
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => toggleProjects("About")}
          >
            About
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => toggleProjects("React")}
          >
            React
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => toggleProjects("Java")}
          >
            Java
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => toggleProjects("Contact")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
