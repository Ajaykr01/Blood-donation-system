import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        <form className="mt-6">
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
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-red-500 text-gray-700"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <NavLink href="#" className="text-sm text-red-600 hover:underline">
              Forgot Password?
            </NavLink>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <NavLink
            to="/signup"
            className="text-red-600 font-medium hover:underline"
          >
            Sign up here
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
