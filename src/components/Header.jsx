import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <header className="sticky top-0">
      <nav>
        <div className="navbar flex justify-around items-center bg-blue-900 h-20">
          <Link to="/">
            <span className="text-white bg-black px-5 py-1 text-2xl rounded-bl-xl">
              Life
            </span>
            <span className="bg-white py-1 px-1 text-2xl rounded-se-xl">
              Saver
            </span>
          </Link>
          <div className="nav">
            <ul className="flex gap-5 justify-evenly">
              <li className="flex justify-between gap-10">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : "text-white"}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : "text-white"}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => `
                ${isActive ? "text-red-500" : "text-white"}`}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : "text-white"}`
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-red-500" : "text-white"}`
                  }
                  to="/donate"
                >
                  Donate Blood
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-nav flex items-center justify-around">
            <GiHamburgerMenu className="ham text-[30px] hidden" />
            <div className="bg-green-400 w-[100px] h-[40px] flex justify-center items-center rounded-3xl text-md">
              <Link to="/login" className="text-md ">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <hr className="h-[1px] bg-rose-100" />
    </header>
  );
}

export default Navbar;
