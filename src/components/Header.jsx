import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { RiListUnordered } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 930) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 w-full bg-blue-900">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12">
        <Link to="/" className="logo text-2xl font-bold">
          <span className="text-white bg-black px-5 py-1 rounded-bl-xl">
            Life
          </span>
          <span className="bg-white py-1 px-1 rounded-se-xl">Saver</span>
        </Link>

        <div className="nav max-w-[90%] flex justify-between md:justify-evenly">
          <ul className="flex gap-10">
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
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-white"}`
                }
                to="/donate"
              >
                Donate Blood
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="right-nav flex items-center justify-around">
          <button
            className="ham text-[30px] hidden"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu className="text-white transition-all" />
          </button>
          <div
            className={`fixed top-0 right-0 h-full w-[250px] bg-blue-900 shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="h-full mt-20 bg-blue-900 px-5">
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-2 bg-slate-800 px-2 rounded-md py-1">
                  <FaHome className="text-white" />
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-yellow-400" : "text-white"
                      } text-[15px] py-1`
                    }
                    to="/"
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="flex items-center gap-2 bg-slate-800 px-2 rounded-md py-1">
                  <CiCircleInfo className="text-white" />
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-yellow-400" : "text-white"
                      } text-[15px] py-1`
                    }
                    to="/about"
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li className="flex items-center gap-2 bg-slate-800 px-2 rounded-md py-1">
                  <RiListUnordered className="text-white" />
                  <NavLink
                    className={({ isActive }) => `
                ${
                  isActive ? "text-yellow-400" : "text-white"
                } text-[15px] py-1`}
                    to="/services"
                    onClick={closeMenu}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="flex items-center gap-2 bg-slate-800 px-2 rounded-md py-1">
                  <FaPhoneAlt className="text-white" />
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-yellow-400" : "text-white"
                      } text-[15px] py-1`
                    }
                    to="/contact"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="flex items-center gap-2 bg-slate-800 px-2 rounded-md py-1">
                  <MdBloodtype className="text-white" />
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-yellow-400" : "text-white"
                      } text-[15px] py-1`
                    }
                    to="/donate"
                    onClick={closeMenu}
                  >
                    Donate Blood
                  </NavLink>
                </li>
                <div className="flex items-center justify-center mt-40">
                  <button className="bg-slate-800 w-28 flex items-center justify-center py-2 gap-1 rounded-xl text-white">
                    <IoMdLogIn className="text-white" />
                    <NavLink
                      className={({ isActive }) =>
                        `${isActive ? "text-yellow-400" : "text-white"}`
                      }
                      to="/login"
                      onClick={closeMenu}
                    >
                      Login
                    </NavLink>
                  </button>
                </div>
              </ul>
            </div>
            <button
              className="absolute top-4 left-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <GrClose className="text-white transition-all" />
            </button>
          </div>
          <div className="hidden login bg-green-400 hover:bg-yellow-500 transition-opacity text-center px-5 py-2 rounded-3xl font-medium">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>

      <hr className="h-[1px] bg-rose-100" />
    </header>
  );
};

export default Navbar;
