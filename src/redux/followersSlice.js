import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
  name: "follow",
  initialState: { follows: [] },
  reducers: {
    addFollow(state, { payload: id }) {
      // console.log(payload);
      state.follows.push({ id });
    },
    deleteFollow(state, { payload: id }) {
      state.follows = state.follows.filter((item) => item.id !== id);
    },
  },
});

export const { addFollow, deleteFollow } = followSlice.actions;
export default followSlice.reducer;
