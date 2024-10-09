import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentColor: '',
  colorHistory: [],
};

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.colorHistory.push(state.currentColor);
      state.currentColor = action.payload;
    },
    undoColor: (state) => {
      if (state.colorHistory.length > 0) {
        state.currentColor = state.colorHistory.pop();
      }
    },
  },
});

export const { changeColor, undoColor } = colorSlice.actions;
export default colorSlice.reducer;
