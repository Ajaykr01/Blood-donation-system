import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "../services/API";
import { useSelector } from "react-redux";
import Layout from "../components/shared/Layout/Layout";
import { Navigate } from "react-router-dom";

const Donation = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  if (user?.role !== "donar") {
    return <Navigate to="/home" replace />;
  }

  //find donar records
  const getDonars = async () => {
    try {
      const res = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donar: user?._id,
        },
      });
      if (res?.data?.success) {
        setData(res?.data?.inventory);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <table className="table-auto w-full m-5 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Blood Group</th>
            <th className="border border-gray-300 px-4 py-2">Inventry Type</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr
              key={record._id}
              className="border-b border-gray-300 hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">
                {record.bloodGroup}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.inventoryType}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.quantity}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Donation;
