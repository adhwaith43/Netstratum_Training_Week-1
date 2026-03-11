import { createSlice } from '@reduxjs/toolkit';

const editedSlice = createSlice({
  name: 'editedMovies',
  initialState: {}, // object where keys are movie IDs for O(1) lookup
  reducers: {
    saveEditedMovie: (state, action) => {
      const { id, title, overview, userRating } = action.payload;
      state[id] = { title, overview, userRating };
    },
  },
});

export const { saveEditedMovie } = editedSlice.actions;
export default editedSlice.reducer;