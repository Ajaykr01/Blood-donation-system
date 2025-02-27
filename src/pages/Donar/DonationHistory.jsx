import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

const DonationHistory = () => {
  const [data, setData] = useState([]);
  const { donor } = useSelector((state) => state.donation.history);
  const id = localStorage.getItem("blood")
  console.log("from doner bllod")
  useEffect(() => {
    
    const getDonarsHistory = async () => {
      try {
        if (id) {
          const res = await API.get(
            `/donation/donation-history/${id}`
          );
          console.log("API Response:", res);
          console.log(res.data.donarData);
          setData(res.data.donarData);
        }
      } catch (error) {
        console.error("Error fetching donation history", error);
      }
    };
    getDonarsHistory();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     let answer = window.prompt(
  //       "Are you sure want to delete this donar",
  //       "Sure"
  //     );
  //     if (!answer) return;

  //     const { data } = await API.delete(`/admin/delete-donar/${id}`);

  //     toast(data?.message, {
  //       autoClose: 3000,
  //     });

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 2000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Layout>
      {/* <h2 className="text-2xl font-bold mt-10 ml-10">My Donation History</h2> */}
      {/* {data.length === 0 ? ( */}
      {/* <p className="ml-10 mt-5">No donation history found.</p> */}
      {/* ) : ( */}
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
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr
              key={record._id}
              className="border-b border-gray-300 hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">
                {record.fullName}
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
              <td className="border border-gray-300 px-4 py-2">{record.age}</td>
              <td className="border border-gray-300 px-4 py-2">
                {record.location}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* )} */}
    </Layout>
  );
};

export default DonationHistory;
