import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: [],
};

const imageSearchSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchQuery, setResults } = imageSearchSlice.actions;
export default imageSearchSlice.reducer;
