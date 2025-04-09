import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  //logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully", {
      autoClose: 2000,
    });
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-black/65 backdrop-blur-md text-white">
        <div className="container flex justify-between items-center">
          <div className="logo m-2 flex items-center">
            <BiDonateBlood className="size-10" />{" "}
            <span className="text-2xl font-semibold">Blood Bank App</span>
          </div>
          <ul className="navbar-nav flex m-5 items-center">
            <li className="nav-item">
              <p className="flex items-center gap-1">
                <FaRegUserCircle /> Welcome,{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                <span className="bg-slate-500 rounded-lg w-20 text-center text-sm">
                  {user?.role}
                </span>
              </p>
            </li>
            {(user?.role === "admin" || user?.role === "hospital") &&
              (location.pathname === "/" ||
              location.pathname === "/hospital" ||
              location.pathname === "/home" ||
              location.pathname === "/admin" ||
              location.pathname === "/consumer" ||
              location.pathname === "/donation" ? (
                <li className="nav-item">
                  <Link to="/analytics" className="text-sm p-2">
                    Analytics
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/" className="text-sm p-2">
                    Home
                  </Link>
                </li>
              ))}
            <li className="nav-item mx-3">
              <button
                className="bg-red-700 text-white h-10 w-24 rounded-md"
                onClick={handleLogout}
              >
                Logout
                <i class="fa-solid fa-right-from-bracket pl-1"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
