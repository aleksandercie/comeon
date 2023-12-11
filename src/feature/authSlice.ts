import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { AuthSliceType, StateType } from './models';

const initialState: AuthSliceType = {
  data: null,
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw new Error(jsonData.error);
    }

    return { ...jsonData, player: { ...jsonData.player, login: username } };
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (username: string) => {
    const response = await fetch('http://localhost:3001/logout', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
      }),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw new Error(jsonData.error);
    }

    return null;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error occurred';
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error occurred';
      });
  },
});

export const selectAuth = createSelector(
  [(state: StateType) => state],
  (item) => item.auth
);

export default authSlice.reducer;
