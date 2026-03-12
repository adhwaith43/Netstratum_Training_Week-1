import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { users: {} },
  reducers: {
    addFavorite: (state, action) => {
      const { userId, movie } = action.payload;
      if (!userId) return;

      // Self-healing: Resets corrupted array state from local storage
      if (!state || Array.isArray(state) || !state.users) {
        return { users: { [userId]: [movie] } };
      }

      if (!state.users[userId]) {
        state.users[userId] = [];
      }

      const exists = state.users[userId].some(item => Number(item.id) === Number(movie.id));
      if (!exists) {
        state.users[userId].push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const { userId, movieId } = action.payload;
      if (!userId || !state || Array.isArray(state) || !state.users || !state.users[userId]) return;

      state.users[userId] = state.users[userId].filter(item => Number(item.id) !== Number(movieId));
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;