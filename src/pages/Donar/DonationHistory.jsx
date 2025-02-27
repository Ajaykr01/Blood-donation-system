import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { toast } from "react-toastify";

const DonationHistory = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

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

  const handleEdit = async (donation) => {
    setEditingId(donation._id);
    setEditFormData(donation);
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      if (!editingId) {
        console.error("❌ Error: editingId is undefined!");
        return;
      }

      const response = await API.put(
        `/donation/update-donation-history/${editingId}`,
        editFormData
      );

      if (!response.data || !response.data.updatedData) {
        console.error("❌ Error: API response is missing updatedData!");
        return;
      }

      setData((prevData) =>
        prevData.map((record) =>
          record._id === editingId ? response.data.updatedData : record
        )
      );

      setEditingId(null);
      toast("Donation history updated successfully!", { autoClose: 2000 });
    } catch (error) {
      console.error("Error updating donation:", error);
      toast("Error updating donation history", { autoClose: 2000 });
    }
  };

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
      <h2 className="text-2xl font-bold mt-5 ml-5">My Donation History</h2>
      {data.length > 0 ? (
        <table className="table-auto w-full m-5 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-2">Donor Name</th>
              <th className="border border-gray-300 px-2 py-2">Email</th>
              <th className="border border-gray-300 px-2 py-2">Phone</th>
              <th className="border border-gray-300 px-2 py-2">Blood Group</th>
              <th className="border border-gray-300 px-2 py-2">Gender</th>
              <th className="border border-gray-300 px-2 py-2">Age</th>
              <th className="border border-gray-300 px-2 py-2">Address</th>
              <th className="border border-gray-300 px-2 py-2">Date</th>
              <th className="border border-gray-300 px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr
                key={record._id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                {editingId === record._id ? (
                  <>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditChange}
                        className="border p-1 w-28"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="email"
                        name="email"
                        value={editFormData.email}
                        onChange={handleEditChange}
                        className="border p-1 w-28"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleEditChange}
                        className="border p-1 w-28"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="bloodGroup"
                        value={editFormData.bloodGroup}
                        onChange={handleEditChange}
                        className="border p-1 w-20"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="gender"
                        value={editFormData.gender}
                        onChange={handleEditChange}
                        className="border p-1 w-20"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="number"
                        name="age"
                        value={editFormData.age}
                        onChange={handleEditChange}
                        className="border p-1 w-20"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        name="location"
                        value={editFormData.location}
                        onChange={handleEditChange}
                        className="border p-1 w-32"
                      />
                    </td>
                    <td className="border border-gray-300 px-2 py-2 flex gap-2">
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
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
                    <td className="border border-gray-300 px-2 py-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(record)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(record._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
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
