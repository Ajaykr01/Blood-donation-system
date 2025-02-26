import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { toast } from "react-toastify";

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    gender: "",
    age: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/donation/donate-blood", formData);
      if (res?.data.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          bloodGroup: "",
          gender: "",
          age: "",
          location: "",
        });
        toast(res.data.message);
      }
    } catch (error) {
      console.error("Error while submitting donation", error);
    }
  };

  return (
    <Layout>
      <div className=" p-5 relative left-1 w-[83vw]  flex justify-center">
        <div className="bg-slate-700  shadow-lg rounded-lg p-8  flex flex-col w-[35vw]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-white">Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-white">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-white">
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
              <label className="block font-medium text-white">
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
              <label className="block font-medium text-white">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-white">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your city/location"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded text-lg font-medium hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DonateBlood;
