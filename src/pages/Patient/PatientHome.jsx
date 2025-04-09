import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaClipboardList,
  FaHourglassHalf,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import API from "../../services/API";

const PatientHome = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchStatsAndRequestes = async () => {
      try {
        const res = await API.get("/requestBlood/stats");
        if (res.data.success) {
          setStats(res.data.stats);
        }

        const requestRes = await API.get("/requestBlood/blood-requests");
        if (requestRes.data.success) {
          setRequests(requestRes.data.requests);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchStatsAndRequestes();
  }, []);

  useEffect(() => {
    if (requests.length > 0) {
      const totalRequests = requests.length;
      const pendingCount = requests.filter(
        (req) => req.status === "Pending"
      ).length;
      const approvedCount = requests.filter(
        (req) => req.status === "Approved"
      ).length;
      const rejectedCount = requests.filter(
        (req) => req.status === "Rejected"
      ).length;

      setStats({
        total: totalRequests,
        pending: pendingCount,
        approved: approvedCount,
        rejected: rejectedCount,
      });
    }
  }, [requests]);

  const statCards = [
    {
      title: "Total Requests",
      count: stats.total,
      color: "text-red-500",
      icon: <FaClipboardList className="text-red-500 size-10" />,
    },
    {
      title: "Pending Requests",
      count: stats.pending,
      color: "text-yellow-500",
      icon: <FaHourglassHalf className="text-yellow-500 size-10" />,
    },
    {
      title: "Approved Requests",
      count: stats.approved,
      color: "text-green-500",
      icon: <FaCheckCircle className="text-green-500 size-10" />,
    },
    {
      title: "Rejected Requests",
      count: stats.rejected,
      color: "text-gray-500",
      icon: <FaTimesCircle className="text-gray-500 size-10" />,
    },
  ];

  return (
    <Layout>
      <>
        <div className="p-10 bg-orange-500 h-[110vh] w-[84vw]">
          <h1 className="text-3xl font-bold mb-6">Blood Request Statistics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, index) => (
              <Card
                key={index}
                className="shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
              >
                <div className="flex flex-col items-center">
                  {stat.icon}
                  <h2 className={`${stat.color} text-xl font-semibold mt-2`}>
                    {stat.title}
                  </h2>
                </div>
                <CardContent>
                  <p className="text-3xl font-bold text-center">{stat.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default PatientHome;
