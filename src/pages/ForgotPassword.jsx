import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/forgotPass/forgot-password",
        { email }
      );
      toast.success(res.data.message);
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong");
      setEmail("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  forgotPass-bg">
      <div className="bg-white p-8 rounded-lg mt-12 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Forgot Password?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email address below to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-600 hover:underline">
            Go back
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
