import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { toast } from "react-toastify";
import API from "../../services/API";

const BloodRequests = () => {
  const [data, setData] = useState([]);
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    const getRequests = async () => {
      try {
        let res;
        if (userRole === "admin" || userRole === "hospital") {
          res = await API.get("/admin/blood-requests");
        }

        if (res && res.data && res.data.success) {
          setData(res.data.requestsData);
        }
      } catch (error) {
        console.error("Error fetching blood requests", error);
      }
    };

    getRequests();
  }, [userRole]);

  const updateStatus = async (id, newStatus, unit = 0) => {
    try {
      const res = await API.put(`/blood-requests/update-request-status/${id}`, {
        status: newStatus,
        bloodUnit: unit,
      });

      if (res.data.success) {
        setData((prevData) =>
          prevData.map((record) =>
            record._id === id ? { ...record, status: newStatus } : record
          )
        );
        if (newStatus === "Approved" && unit > 0) {
          toast.success(`${unit} ML deducted from the stock!`);
        } else {
          toast.warning(`Blood request ${newStatus.toLowerCase()}!`);
        }
      }
    } catch (error) {
      console.error("Error updating request status:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to update request status");
      }
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mt-5 ml-5">Blood Requests</h2>
      {data.length > 0 ? (
        <table className="table-auto w-full m-5 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-2">Patient Name</th>
              <th className="border border-gray-300 px-2 py-2">Age</th>
              <th className="border border-gray-300 px-2 py-2">Gender</th>
              <th className="border border-gray-300 px-2 py-2">Reason</th>
              <th className="border border-gray-300 px-2 py-2">Blood Group</th>
              <th className="border border-gray-300 px-2 py-2">Unit</th>
              <th className="border border-gray-300 px-2 py-2">Date</th>
              <th className="border border-gray-300 px-2 py-2">Status</th>
              <th className="border border-gray-300 px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
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
                  {record.bloodUnit} ML
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
                  {record.status}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.status === "Pending" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(record._id, "Approved", record.bloodUnit)
                        }
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-3"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(record._id, "Rejected")}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-red-500 mt-5 pl-5">
          No blood requests from patient side.
        </p>
      )}
    </Layout>
  );
};

export default BloodRequests;
