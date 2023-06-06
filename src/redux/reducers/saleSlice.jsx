import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getSales,
  updateSaleStatus,
  getSalesDetails,
} from '../../services/salesApi';

// Async thunk for fetching sales
export const fetchSales = createAsyncThunk('sales/fetchSales', async () => {
  try {
    const sales = await getSales();
    return sales;
  } catch (error) {
    throw error;
  }
});

// Async thunk for fetching sales details
export const fetchSalesDetails = createAsyncThunk(
  'salesDetails/fetchSalesDetails',
  async () => {
    try {
      const salesDetails = await getSalesDetails();
      return salesDetails;
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk for updating sale status
export const updateStatus = createAsyncThunk(
  'sales/updateStatus',
  async ({ saleId, status }, { rejectWithValue, dispatch }) => {
    try {
      const updatedSale = await updateSaleStatus(saleId, status);
      dispatch(showSuccessMessage('Sale status updated successfully.'));
      return updatedSale;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        dispatch(showErrorMessage(error.response.data.message));
      } else {
        dispatch(showErrorMessage('Failed to update sale status.'));
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Sales slice
const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    Sales: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch sales
    builder.addCase(fetchSales.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSales.fulfilled, (state, action) => {
      state.loading = false;
      state.sales = action.payload;
    });
    builder.addCase(fetchSales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update sale status
    builder.addCase(updateStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateStatus.fulfilled, (state, action) => {
      state.loading = false;
      const { saleId, status, message } = action.payload;
      const sale = state.sales.find((sale) => sale.id === saleId);
      if (sale) {
        sale.status = status;
        sale.message = message; // Add the updated status message to the sale object
      }
    });

    builder.addCase(updateStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Sales details slice
const salesDetailsSlice = createSlice({
  name: 'salesDetails',
  initialState: {
    salesDetails: [], // Rename sales to salesDetails
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch sales details
    builder.addCase(fetchSalesDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSalesDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.salesDetails = action.payload; // Correctly assign payload to salesDetails
    });
    builder.addCase(fetchSalesDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Export actions
export const { actions: salesActions } = salesSlice;
export const { actions: salesDetailsActions } = salesDetailsSlice;

// Export reducers
export const salesReducer = salesSlice.reducer;
export const salesDetailsReducer = salesDetailsSlice.reducer;
