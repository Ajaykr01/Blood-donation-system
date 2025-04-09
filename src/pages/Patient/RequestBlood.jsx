import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useState } from "react";
import API from "../../services/API";
import { toast } from "react-toastify";

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    gender: "",
    reason: "",
    bloodGroup: "",
    bloodUnit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/requestBlood/request-blood", formData);
      if (res?.data.success) {
        setFormData({
          patientName: "",
          patientAge: "",
          gender: "",
          reason: "",
          bloodUnit: "",
        });
        toast(res.data.message);
      }
    } catch (error) {
      console.error("Error while submitting blood request", error);
    }
  };

  return (
    <Layout>
      <>
        <div className="p-10 flex justify-center items-center h-[110vh] w-[84vw] bg-yellow-500">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
              Request Blood
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Patient Age
                </label>
                <input
                  type="number"
                  name="patientAge"
                  value={formData.patientAge}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  defaultValue={"Choose Gender"}
                >
                  Choose Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option
                    value=""
                    disabled
                    defaultValue={"Select Gender"}
                    className="bg-slate-700"
                  >
                    Select Gender
                  </option>
                  <option value={"Male"} className="bg-slate-700">
                    Male
                  </option>
                  <option value={"Female"} className="bg-slate-700">
                    Female
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Reason
                </label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full p-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {[
                    "Select your blood group",
                    "A+",
                    "A-",
                    "B+",
                    "B-",
                    "O+",
                    "O-",
                    "AB+",
                    "AB-",
                  ].map((group) => (
                    <option key={group} value={group} className="bg-slate-700">
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Blood Unit (ml)
                </label>
                <input
                  type="number"
                  name="bloodUnit"
                  value={formData.bloodUnit}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-slate-500 transition-all"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default RequestBlood;
