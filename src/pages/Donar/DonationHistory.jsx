import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DonationHistory = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("blood");

  useEffect(() => {
    const getDonarsHistory = async () => {
      try {
        if (id) {
          const res = await API.get(`/donation/donation-history/${id}`);
          setData(res.data.donarData);
        }
      } catch (error) {
        console.error("Error fetching donation history", error);
      }
    };
    getDonarsHistory();
  }, []);

  const handleDelete = async (donationId) => {
    try {
      if (!donationId) {
        console.error("❌ Error: donationId is undefined!");
        return;
      }

      let answer = window.prompt(
        "Are you sure want to delete this record?",
        "Sure"
      );
      if (!answer) return;

      const { data } = await API.delete(
        `/donation/delete-donation-history/${donationId}`
      );

      toast(data?.message, {
        autoClose: 2000,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h2 className="text-2xl font-bold mt-10 ml-5">My Donation History</h2>
      {data.length > 0 ? (
        <table className="table-auto w-full m-5 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Donor Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Blood Group</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr
                key={record._id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {record.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.bloodGroup}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.gender}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.age}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                </td>
                <div className="flex py-2 px-4 gap-5 justify-center items-center">
                  <button className="bg-yellow-500 px-5 py-2 rounded-lg">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-2 rounded-lg"
                    onClick={() => handleDelete(record._id)}
                  >
                    Delete
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-red-500 mt-5">
          No donation history found.
        </p>
      )}
    </Layout>
  );
};

export default DonationHistory;
