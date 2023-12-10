import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
      })
      .addCase(fetchCategoriesData.rejected, (state) => {
        state.loading = false;
        state.error = 'Error occurred';
      });
  },
});

export const selectCategories = (state: StateType) => state.categories;

export default categoriesSlice.reducer;
