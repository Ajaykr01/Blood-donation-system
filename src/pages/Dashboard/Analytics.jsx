import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#AA60C8",
    "#3674B5",
    "#A1E3F9",
    "#3D8D7A",
    "#DE3163",
    "#00879E",
    "#FFA09B",
    "#4B164C",
  ];
  //GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  const getBloodRecords = async () => {
    try {
      const res = await API.get("/inventory/get-recent-inventory");

      if (res?.data?.success) {
        setInventoryData(res.data.inventory);
      } else {
        console.error("API response", res.data);
      }
    } catch (error) {
      console.error("API error:", error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center mt-10">
        {data?.map((record, index) => (
          <div
            key={index}
            className="w-80 h-60 m-5 bg-white rounded-lg shadow-md p-4"
            style={{ backgroundColor: `${colors[index]}` }}
          >
            <h2 className="text-4xl font-bold mb-2 text-center">
              {record.bloodGroup}
            </h2>
            <div className="mb-2 mt-8">
              <p className="text-gray-700 text-xl">
                Total In: {record.totalIn} (ML)
              </p>
              <p className="text-gray-700 text-xl">
                Total Out: {record.totalOut} (ML)
              </p>
            </div>
            <p className="font-semibold text-lg text-center bg-gray-900 h-10 rounded-md pt-1 mt-5 text-white">
              Total Available: {record.totalIn - record.totalOut} (ML)
            </p>
          </div>
        ))}
      </div>
      <div className="container mt-10">
        <h1 className="ml-16 text-4xl">Recent Blood Transactions</h1>
        <table className="table-auto w-[85rem] ml-16 mb-5 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Blood Group</th>
              <th className="border border-gray-300 px-4 py-2">
                Inventory Type
              </th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Donar Email</th>
              <th className="border border-gray-300 px-4 py-2">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
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
                  {record.quantity} (ML)
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
      </div>
    </>
  );
};

export default Analytics;
