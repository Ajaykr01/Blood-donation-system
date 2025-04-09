import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaTint, FaUsers, FaHospital } from "react-icons/fa";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";

const dummyData = [
  { name: "Jan", donations: 120, requests: 80 },
  { name: "Feb", donations: 150, requests: 100 },
  { name: "Mar", donations: 180, requests: 120 },
  { name: "Apr", donations: 200, requests: 150 },
  { name: "May", donations: 250, requests: 180 },
  { name: "Jun", donations: 300, requests: 200 },
  { name: "Jul", donations: 350, requests: 220 },
  { name: "Aug", donations: 400, requests: 550 },
  { name: "Sep", donations: 200, requests: 150 },
  { name: "Apr", donations: 200, requests: 150 },
  { name: "Apr", donations: 200, requests: 150 },
  { name: "Apr", donations: 200, requests: 150 },
];

const Analytics = () => {
  const [data, setData] = useState([]);
  const [totalBloodStock, setTotalBloodStock] = useState(0);
  const [stockData, setStockData] = useState([
    { group: "A+", stock: 0 },
    { group: "A-", stock: 0 },
    { group: "B+", stock: 0 },
    { group: "B-", stock: 0 },
    { group: "O+", stock: 0 },
    { group: "O-", stock: 0 },
    { group: "AB+", stock: 0 },
    { group: "AB-", stock: 0 },
  ]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const res = await API.get("/admin/donation-history");

        if (res?.data?.success) {
          const approvedDonations = res.data.donationData.filter(
            (donation) => donation.status === "Approved"
          );
          setData(approvedDonations);
        }
      } catch (error) {
        console.error("Error fetching blood stock:", error);
      }
    };

    fetchStockData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const totalStock = data.reduce(
        (total, donation) => total + Number(donation.unit || 0),
        0
      );
      setTotalBloodStock(totalStock);

      const bloodStockMap = {};
      data.forEach((donation) => {
        if (donation.status === "Approved") {
          const bloodGroup = donation.bloodGroup;
          const quantity = Number(donation.unit) || 0;
          if (bloodStockMap[bloodGroup]) {
            bloodStockMap[bloodGroup] += quantity;
          } else {
            bloodStockMap[bloodGroup] = quantity;
          }
        }
      });

      setStockData((prevStockData) =>
        prevStockData.map((item) => ({
          ...item,
          stock: bloodStockMap[item.group] || 0,
        }))
      );
    }
  }, [data]);
  return (
    <>
      <Header />
      <div className="p-10 space-y-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen">
        <div className="grid grid-cols-4 gap-10">
          <Card className="p-5 flex items-center justify-between bg-yellow-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <FaTint className="text-red-600 text-4xl" />
            <div>
              <h2 className="text-lg font-semibold">Total Blood Stock</h2>
              <p className="text-2xl font-bold">{totalBloodStock} ML</p>
            </div>
          </Card>
          <Card className="p-5 flex items-center justify-between bg-emerald-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <FaUsers className="text-blue-800 text-4xl" />
            <div>
              <h2 className="text-lg font-semibold">Total Donors</h2>
              <p className="text-2xl font-bold">{data.length}</p>
            </div>
          </Card>
        </div>

        <Card className="bg-violet-800 shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4 text-red-500">
              Total Available Blood
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {stockData.map((item) => (
                <div
                  key={item.group}
                  className="p-4 bg-gray-700 rounded-lg text-center shadow-md hover:bg-gray-600 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.group}
                  </h3>
                  <p className="text-xl font-bold text-red-400">
                    {item.stock} ML
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-800 shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4 text-green-400">
              Blood Stock Levels
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="group" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
                />
                <Legend />
                <Bar dataKey="stock" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-violet-800 shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              Donation vs Requests
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="donations"
                  stroke="#34d399"
                  strokeWidth={2}
                  dot={{ r: 5, fill: "#34d399" }}
                />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="#f87171"
                  strokeWidth={2}
                  dot={{ r: 5, fill: "#f87171" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Analytics;
