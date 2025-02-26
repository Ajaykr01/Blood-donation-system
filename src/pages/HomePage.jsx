import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment/moment";

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin");
    }
  }, [user, navigate]);

  const getBloodRecords = async () => {
    try {
      const res = await API.get("/inventory/get-inventory");

      if (res?.data?.success) {
        setData(res.data.inventory);
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
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Modal />
          <div>
            <table className="table-auto w-full ml-5 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">
                    Blood Group
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Inventory Type
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Donar Email
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Time & Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
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
            <hr />
          </div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
