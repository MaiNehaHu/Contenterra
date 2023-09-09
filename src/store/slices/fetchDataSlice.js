import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const api = "https://www.reddit.com/r/reactjs.json";

// Define an async thunk to fetch data
export const fetchListOfData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const responseData = await response.json();
  const data = responseData.data.children;

  return data;
});

// Create a slice for your data
const fetchDataSlice = createSlice({
  name: "data",

  initialState: {
    data: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListOfData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListOfData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchListOfData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchDataSlice.reducer;