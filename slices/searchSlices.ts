import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
  isDarkMode: boolean;
}

const initialState: CounterState = {
  value: "",
  isDarkMode: false,
};

// export const searchSlice = createSlice({
//   name: "search",
//   initialState,
//   reducers: {
//     updateValue: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { updateValue } = searchSlice.actions;
export const { toggleDarkMode } = searchSlice.actions;

export default searchSlice.reducer;
