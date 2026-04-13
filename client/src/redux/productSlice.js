import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('product/get', async () => {
  try {
    let result = await axios.get('http://localhost:5000/product');
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addProduct = createAsyncThunk('product/add', async (newProduct) => {
  try {
    let result = await axios.post('http://localhost:5000/product/add', newProduct);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteProduct = createAsyncThunk('product/delete', async (id) => {
  try {
    await axios.delete('http://localhost:5000/product/' + id);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const editProduct = createAsyncThunk('product/edit', async ({ id, data }) => {
  try {
    await axios.put('http://localhost:5000/product/' + id, data);
    return { id, data };
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  productlist: [],
  favorites: [],
  status: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const idx = state.favorites.indexOf(id);
      if (idx === -1) state.favorites.push(id);
      else state.favorites.splice(idx, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getProducts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.productlist = action.payload.data.products;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'fail';
      })
      // ADD
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productlist.push(action.payload.data.product);
      })
      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productlist = state.productlist.filter(p => p._id !== action.payload);
      })
      // EDIT
      .addCase(editProduct.fulfilled, (state, action) => {
        const { id, data } = action.payload;
        const item = state.productlist.find(p => p._id === id);
        if (item) Object.assign(item, data);
      });
  },
});

export const { toggleFavorite } = productSlice.actions;
export default productSlice.reducer;