import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { toast } from "react-toastify";
import API from "../../services/API";

const HospitalDonations = () => {
  const [data, setData] = useState([]);
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    const getDonations = async () => {
      try {
        const res = await API.get("/admin/donation-history");
        if (res && res.data && res.data.success) {
          setData(res.data.donationData);
        }
      } catch (error) {
        console.error("Error fetching donation history:", error);
      }
    };

    getDonations();
  }, [userRole]);

  const updateStatus = async (id, newStatus, unit = 0) => {
    try {
      const res = await API.put(`/admin/update-donation-status/${id}`, {
        status: newStatus,
      });

      if (res.data.success) {
        setData((prevData) =>
          prevData.map((record) =>
            record._id === id ? { ...record, status: newStatus } : record
          )
        );
        if (newStatus === "Approved" && unit > 0) {
          toast.success(`${unit} ML added to the stock!`);
          console.log(`Donation status updated to ${newStatus}`);
        } else {
          toast.warning(`Donation request ${newStatus.toLowerCase()}!`);
        }
      }
    } catch (error) {
      console.error("Error updating donation status:", error);
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mt-5 ml-5">Blood Donations History</h2>
      {data.length > 0 ? (
        <table className="table-auto w-full m-5 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-2">Donor Name</th>
              <th className="border border-gray-300 px-2 py-2">Email</th>
              <th className="border border-gray-300 px-2 py-2">Phone</th>
              <th className="border border-gray-300 px-2 py-2">Blood Group</th>
              <th className="border border-gray-300 px-2 py-2">Unit(ML)</th>
              <th className="border border-gray-300 px-2 py-2">Gender</th>
              <th className="border border-gray-300 px-2 py-2">Age</th>
              <th className="border border-gray-300 px-2 py-2">Address</th>
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
                  {record.name}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.email}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.phone}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.bloodGroup}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.unit}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.gender}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.age}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {record.location}
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
                          updateStatus(record._id, "Approved", record.unit)
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
        <p className="text-red-500 mt-5 pl-5">No donation history found.</p>
      )}
    </Layout>
  );
};
export default HospitalDonations;
