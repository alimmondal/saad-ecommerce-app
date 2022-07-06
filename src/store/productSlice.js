import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { PRODUCT_IMAGE_MAP } from '../data/product-image-map';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',
  async () => {
  const res = await fetch('http://103.28.121.57/api/products')
    return res.json();
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      const { payload } = action;
      // payload.products.forEach((product) => {
      //   product.featuredImage =
      //     PRODUCT_IMAGE_MAP[product.name].featuredImage;
      //   product.images = PRODUCT_IMAGE_MAP[product.name].images;
      // });
      
      state.status = 'success';
      state.products = payload.products;
    },
    
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
});
export const selectStatus = (state) => state.products.status;
export const selectFeaturedProducts = (state) =>
  state.products.products.filter((item) => item.is_featured);

export default productSlice.reducer;



// export const fetchProducts = createAsyncThunk('products/fetchProducts',
//   async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
//     return res.data;
//   }
// )

// export const productSlice = createSlice({
//   name: 'products',
//   initialState:{
//   isLoading: false,
//   products: [],
//   error: null,
// },
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.products = action.payload;  
//       state.error = null;
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       state.isLoading = false;
//       state.products = [];
//       state.error = action.error.message;
//     });
//   }
    
// });

// export default productSlice.reducer;