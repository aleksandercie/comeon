import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StateType } from './models';

export type GameType = {
  name: string;
  categoryIds: number[];
  code: string;
  description: string;
  icon: string;
};

export type GamesSliceType = {
  data: null | GameType[];
  loading: boolean;
  error: null | string;
};

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
      })
      .addCase(fetchGamesData.rejected, (state) => {
        state.loading = false;
        state.error = 'Error occurred';
      });
  },
});

export const selectGames = (state: StateType) => state.games;

export default gamesSlice.reducer;
