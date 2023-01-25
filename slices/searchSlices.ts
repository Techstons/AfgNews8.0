import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "sss",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = searchSlice.actions;

export default searchSlice.reducer;
