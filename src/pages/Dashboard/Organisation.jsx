import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import moment from "moment";

const Organisation = () => {
  //get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  //find org record
  const getOrganisations = async () => {
    try {
      if (user?.role === "donar") {
        const res = await API.get("/inventory/get-organisation");
        if (res?.data?.success) {
          setData(res?.data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const res = await API.get("/inventory/get-organisation-for-hospital");
        if (res?.data?.success) {
          setData(res?.data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganisations();
  }, []);

  return (
    <Layout>
      <table className="table-auto w-full m-5 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
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
                {record.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.phone}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {record.address}
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

export default Organisation;
