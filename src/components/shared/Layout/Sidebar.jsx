import React from "react";
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
                className={`menu-item ${
                  location.pathname === "/admin/donar-list"
                }`}
              >
                <i class="fa-solid fa-user"></i>
                <Link to="/admin/donar-list">Donor List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/admin/patient-list"
                }`}
              >
                <i class="fa-solid fa-hospital-user"></i>
                <Link to="/admin/patient-list">Patient List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/admin/hospital-list"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/admin/hospital-list">Hospital List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/admin/donations"
                }`}
              >
                <i class="fa-solid fa-hand-holding-medical"></i>
                <Link to="/admin/donations">Donations</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/admin/blood-requests"
                }`}
              >
                <i class="fa-solid fa-rotate"></i>
                <Link to="/admin/blood-requests">Blood Requets</Link>
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
                <Link to="/donar/donate-blood">Donate Blood</Link>
              </div>
              <div className={`menu-item ${location.pathname === "/donation"}`}>
                <i class="fa-solid fa-clock-rotate-left"></i>
                <Link to="/donar/donation-history">Donation History</Link>
              </div>
            </>
          )}

          {user?.role === "patient" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/patient-dashboard"
                }`}
              >
                <i class="fa-solid fa-house"></i>
                <Link to="/patient-dashboard">Home</Link>
              </div>
              <div className="menu-item">
                <i class="fa-solid fa-rotate"></i>
                <Link to="/patient/patient-request">Make Request</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/patient/patient-request-history"
                }`}
              >
                <i class="fa-solid fa-clock-rotate-left"></i>
                <Link to="/patient/patient-request-history">
                  Request History
                </Link>
              </div>
            </>
          )}

          {user?.role === "hospital" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-dashboard"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital-dashboard">Home</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital/donations"
                }`}
              >
                <i class="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital/donations">Donations</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital/blood-requests"
                }`}
              >
                <i class="fa-solid fa-rotate"></i>
                <Link to="/hospital/blood-requests">Blood Requets</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
