import { createSlice } from "@reduxjs/toolkit";


const initialState: timeType = {
  focus: 20,
  shortBreak: 5,
  longBreak: 15,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setFocus: (state, action) => {
      state.focus = action.payload;
    },
    setShrot: (state, action) => {
      state.shortBreak = action.payload;
    },
    setLong: (state, action) => {
      state.longBreak = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFocus, setShrot, setLong} = timeSlice.actions;

export default timeSlice.reducer;
