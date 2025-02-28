import React from "react";
import { userMenu } from "./Menus/UserMenu";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/donar-list"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donar-list">Donar List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>
            </>
          )}

          {user?.role === "donar" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donar-dashboard"
                }`}
              >
                <i class="fa-solid fa-house-user"></i>
                <Link to="/donar-dashboard">Home</Link>
              </div>
              <div className="menu-item">
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donate-blood">Donate Blood</Link>
              </div>
              <div className={`menu-item ${location.pathname === "/donation"}`}>
                <i class="fa-solid fa-clock-rotate-left"></i>
                <Link to="/donation-history">Donation History</Link>
              </div>
            </>
          )}

          {user?.role === "hospital" && (
            <div className={`menu-item ${location.pathname === "/consumer"}`}>
              <i className="fa-solid fa-hand-holding-medical"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
