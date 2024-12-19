import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>

        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-red-500 text-gray-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-red-500 text-gray-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-red-500 text-gray-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-red-500 text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-red-600 font-medium hover:underline">
            Log in here
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
