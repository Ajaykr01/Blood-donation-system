import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const RequestHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await API.get("/requestBlood/blood-requests");
        if (res.data.success) {
          setData(res.data.requests);
        }
      } catch (error) {
        console.error("Error fetching request history:", error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <Layout>
      <>
        <h2 className="text-2xl font-bold mt-5 ml-5">
          My Blood Request History
        </h2>
        {data.length > 0 ? (
          <table className="table-auto w-full m-5 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-500">
                <th className="border border-gray-300 px-2 py-2">
                  Patient Name
                </th>
                <th className="border border-gray-300 px-2 py-2">
                  Patient Age
                </th>
                <th className="border border-gray-300 px-2 py-2">Gender</th>
                <th className="border border-gray-300 px-2 py-2">Reason</th>
                <th className="border border-gray-300 px-2 py-2">
                  Blood Group
                </th>
                <th className="border border-gray-300 px-2 py-2">Unit</th>
                <th className="border border-gray-300 px-2 py-2">Date</th>
                <th className="border border-gray-300 px-2 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((record) => (
                <tr
                  key={record._id}
                  className="border-b border-gray-300 hover:bg-gray-50"
                >
                  <td className="border border-gray-300 px-2 py-2">
                    {record.patientName}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {record.patientAge}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {record.gender}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {record.reason}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {record.bloodGroup}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {record.bloodUnit} ml
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {record.createdAt
                      ? moment(record.createdAt).format("DD/MM/YYYY")
                      : "N/A"}
                  </td>
                  <td
                    className={`border border-gray-300 px-2 py-2 text-white
                  ${record.status === "Pending" ? "bg-yellow-500" : ""}
                  ${record.status === "Approved" ? "bg-green-500" : ""}
                  ${record.status === "Rejected" ? "bg-red-500" : ""}`}
                  >
                    {record.status || "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-red-500 mt-5">
            No blood request history found.
          </p>
        )}
      </>
    </Layout>
  );
};

export default RequestHistory;
