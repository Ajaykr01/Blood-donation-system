import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import API from "../../services/API";

const HospitalList = () => {
  const [data, setData] = useState([]);
  //find hospital records
  const getHospitals = async () => {
    try {
      const res = await API.get("/admin/hospital-list");
      if (res?.data?.success) {
        setData(res?.data?.hospitalData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      let answer = window.prompt(
        "Are you sure want to delete this hospital",
        "Sure"
      );
      if (!answer) return;

      const { data } = await API.delete(`/admin/delete-donar/${id}`);

      toast(data?.message, {
        autoClose: 3000,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <table className="table-auto w-full m-5 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-orange-500">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr
              key={record._id}
              className="border-b border-gray-300 hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">
                {record.hospitalName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.phone}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="flex items-center bg-red-600 h-8 w-20 justify-center rounded-md text-white"
                  onClick={() => handleDelete(record._id)}
                >
                  <MdDelete />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default HospitalList;
