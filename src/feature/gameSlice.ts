import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { GamesSliceType, StateType } from './models';

const initialState: GamesSliceType = {
  data: null,
  loading: false,
  error: null,
};

export const fetchGamesData = createAsyncThunk(
  'user/fetchGamesData',
  async () => {
    const response = await fetch('http://localhost:3001/games', {
      method: 'get',
    });
    const jsonData = await response.json();
    return jsonData;
  }
);

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const selectGames = createSelector(
  [(state: StateType) => state],
  (item) => item.games
);

export default gamesSlice.reducer;
