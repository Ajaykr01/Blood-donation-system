import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { FaUserMd, FaHeartbeat, FaHospital, FaChartLine } from "react-icons/fa";

const Hospitals = () => {
  const quickActions = [
    { title: "Doctors", icon: FaUserMd },
    { title: "Patients", icon: FaHeartbeat },
    { title: "Hospitals", icon: FaHospital },
    { title: "Reports", icon: FaChartLine },
  ];
  return (
    <Layout>
      <div className="min-h-screen w-[83vw] bg-gray-100 p-6">
        <div className="bg-blue-600 text-white p-10 text-center rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold">Welcome to Hospital Dashboard</h1>
          <p className="mt-2 text-lg">
            Manage patients, doctors, and inventory with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-100 cursor-pointer"
            >
              <action.icon className="text-blue-600 text-4xl" />
              <h3 className="mt-2 text-lg font-semibold">{action.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/846/770/non_2x/in-hospital-ward-composition-vector.jpg"
            alt="Hospital"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              Efficient Healthcare Management
            </h2>
            <p className="mt-3 text-gray-600">
              Our system helps you keep track of patients, doctors, and hospital
              inventory in a seamless and efficient way. Stay ahead with
              real-time analytics and updates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hospitals;
