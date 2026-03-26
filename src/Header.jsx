import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const links = [
    { path: "/#home", label: "Home" },
    { path: "/#about", label: "About us" },
    { path: "/#skill", label: "Skill" },
    { path: "/#project", label: "Project" },
    { path: "/#contact", label: "Contact us" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <HashLink smooth to="/#home" className="text-2xl font-bold text-indigo-600">
              Portfolio
            </HashLink> 

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((item, index) => (
                <HashLink
                  key={index}
                  smooth
                  to={item.path}
                  className="font-medium hover:text-indigo-600 transition"
                >
                  {item.label}
                </HashLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 shadow-md">
            {links.map((item, index) => (
              <HashLink
                key={index}
                smooth
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block font-medium hover:text-indigo-600"
              >
                {item.label}
              </HashLink>
            ))}
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Header;