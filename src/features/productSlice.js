import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  price: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload.id);

      if (item) {
        item.amount += payload.amount;
      } else {
        state.products.push(payload);
      }
     productsSlice.caseReducers.calculateTotal(state)
    },

    removeProduct: (state, { payload }) => {},
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;

      state.products.forEach((item) => {
        price += item.price * item.amount;
        amount += item.amount;
      });

      state.amount = amount;
      state.price = price;
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
