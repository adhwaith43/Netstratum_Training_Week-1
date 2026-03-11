import { createSlice } from '@reduxjs/toolkit';

const hiddenSlice = createSlice({
  name: 'hiddenMovies',
  initialState: [], // Array of movie IDs
  reducers: {
    hideMovie: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    // Optional: in case you accidentally delete one and need it back
    restoreMovie: (state, action) => {
      return state.filter(id => id !== action.payload);
    }
  }
});

export const { hideMovie, restoreMovie } = hiddenSlice.actions;
export default hiddenSlice.reducer;