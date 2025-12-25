import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;
    },
    removeProducts(state,action){
        state.list=action.payload;
    },
    removeProductsById(state,action){
        state.list=action.payload;
    }
  },
});

export const { setProducts, removeProducts,removeProductsById } = productSlice.actions;
export default productSlice.reducer;
