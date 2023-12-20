import { getSidebarCategory } from "@/apis/product";
import { ICategory } from "@/interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getListCategoriesHome = createAsyncThunk(
  "product/getListCategoriesHome",
  async () => {
    try {
      const result = await getSidebarCategory();

      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

interface ProductState {
  isLoading: boolean;
  categories: ICategory[];
}

const defaultState: ProductState = {
  isLoading: true,
  categories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListCategoriesHome.fulfilled, (state, { payload }) => {
      state.categories = payload?.result || [];
    });
  },
});

const { reducer: productReducer, actions } = productSlice;

export const {} = actions;

export default productReducer;
