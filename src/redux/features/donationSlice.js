import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";

export const fetchDonorHistory = createAsyncThunk(
  "donation/fetchDonorHistory",
  async (email, { rejectWithValue }) => {
    try {
      const response = await API.get(`/donation/donation-history/${email}`);
      return response.data.donarData;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching history"
      );
    }
  }
);

const donationSlice = createSlice({
  name: "donation",
  initialState: {
    history: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonorHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonorHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(fetchDonorHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default donationSlice.reducer;
