import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './api'
export const getProducts = createAsyncThunk(
  //action type string
  'product/getProducts',
  // callback function
  async (thunkAPI) => {
    const res = await fetch('http://localhost:3004/Product')
      .then((data) => data.json())
      .catch((error) => console.log(error.message))
    return res
  })

const initialState = {
  cart: [],
  loading: false,
  products: [],
  errorMessage: " "
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementProduct(state, action) {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      }
    },
    decrementProduct(state, action) {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product && product.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== product.id);
      } else {
        product.quantity--;
      }
    },
    deleteProduct(state, action) {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        state.cart = state.cart.filter((item) => item.id !== product.id);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.message;
      })
    builder.addMatcher(
      api.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        // Lưu thông tin products vào state
        state.products = action.payload;
      }
    );
  },
})


export const { addToCart, incrementProduct, decrementProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer