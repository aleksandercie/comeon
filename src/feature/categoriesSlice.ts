import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { CategoriesSliceType, StateType } from './models';

const initialState: CategoriesSliceType = {
  data: null,
  loading: false,
  error: null,
};

export const fetchCategoriesData = createAsyncThunk(
  'user/fetchCategoriesData',
  async () => {
    const response = await fetch('http://localhost:3001/categories', {
      method: 'get',
    });
    const jsonData = await response.json();
    return jsonData;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const selectCategories = createSelector(
  [(state: StateType) => state],
  (item) => item.categories
);

export default categoriesSlice.reducer;
