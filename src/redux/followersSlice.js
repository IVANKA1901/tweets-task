import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  follows: [],
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    addFollow(state, { payload: id }) {
      state.follows.push({ id });
    },
    deleteFollow(state, { payload: id }) {
      state.follows = state.follows.filter((item) => item.id !== id);
    },
  },
});

export const { addFollow, deleteFollow } = followSlice.actions;
export default followSlice.reducer;
