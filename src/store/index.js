import { configureStore } from "@reduxjs/toolkit";
import fetchDataSlice from "./slices/fetchDataSlice";
import expandedCardIdSlice from "./slices/expandedCardIdSlice";

const store = configureStore({
  reducer: {
    fetchData: fetchDataSlice,

    expandedCardId: expandedCardIdSlice,
  },
});

export default store;
