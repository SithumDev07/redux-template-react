import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
  name: "Sample Name", // Whatever name you want
  initialState: {
    // Initial values of the state (define everything here)
    name: "redux",
    count: 0,
    path: undefined,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.count++;
    },
    changeName: (state, action) => {
      state.name = action.payload; // action payload is the value we are dispatching
    },
    updateAll: (state, action) => {
      state.count = action.payload.count;
      state.name = action.payload.name;
      state.path = action.payload.path;
    },
  },
});

// Don't forget to add all reducers, otherwise won't be able to dispatch
export const { increaseCount, changeName, updateAll } = sampleSlice.actions;
export default sampleSlice.reducer;
