import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import donationReducer from "./features/donationSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    donation: donationReducer,
  },
});

export default store;
