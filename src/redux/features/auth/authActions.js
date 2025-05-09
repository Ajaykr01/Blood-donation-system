import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });

      localStorage.setItem("blood", data.user._id);
      localStorage.setItem("role", data.user.role);
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        if (role === "admin") {
          window.location.replace("/admin");
        } else if (role === "donar") {
          window.location.replace("/donar-dashboard");
        } else if (role === "hospital") {
          window.location.replace("/hospital-dashboard");
        } else if (role === "patient") {
          window.location.replace("/patient-dashboard");
        }
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userSignUp = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      organisationName,
      hospitalName,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        address,
        phone,
      });
      localStorage.setItem("blood", JSON.stringify(data));
      if (data.success) {
        toast.success(data.message);
        window.location.replace("/login");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
