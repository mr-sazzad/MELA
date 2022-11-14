import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { Links } from "../statistic/Statistic";

// const activeStyle = {
//   textDecoration: "underline",
// };

const Navbar = () => {
  let activeStyle = {
    backgroundColor: "#1E293B",
    padding: "10px 10px",
    borderRadius: "3px",
  };
  let activeClassName = {
    backgroundColor: "#1E293B",
    padding: ".8rem 1.2rem",
    borderRadius: "3px",
  };
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80">
      <div className="container">
        <div className="flex justify-between items-center px-5 dark:text-slate-50 h-16">
          <div className="navbar-left-side">MELA</div>
          <div className="navbar-right-side hidden md:block">
            <ul className="flex gap-5">
              {Links.map((link) => (
                <li key={link.id} className="list-none">
                  <NavLink
                    to={link.to}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="block md:hidden">
            <img
              src={open ? close : menu}
              alt="icon"
              className="p-2 hover:bg-slate-800 object-contain rounded-md hover:-translate-x-[2px] duration-300 cursor-pointer h-[40px] w-[40px]"
              onClick={handleToggle}
            />
            {open && (
              <ul className="flex flex-col gap-8 absolute bg-[#0B1120]/80 top-[4rem] right-[0px] w-[200px] px-10 text-center h-[91vh] pt-10 active:-translate-x-[0px] duration-1000">
                {Links.map((link) => (
                  <li key={link.id} className="list-none">
                    <NavLink
                      to={link.to}
                      style={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                      className="px-5 py-[.8rem] hover:bg-slate-800 rounded-[3px]"
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
