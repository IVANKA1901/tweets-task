import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, putUser } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(putUser.pending, handlePending)
      .addCase(putUser.fulfilled, (state, { payload }) => {
        const index = state.users.findIndex((el) => el.id === payload.id);
        state.users[index] = { ...state.users[index], ...payload };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(putUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
