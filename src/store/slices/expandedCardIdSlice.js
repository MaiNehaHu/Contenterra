import { createSlice } from "@reduxjs/toolkit";

const expandedCardIdSlice = createSlice({
  name: "To expand the self Text HTML",

  initialState: null,

  reducers: {
    setExpandedCardId(state, action) {
      return action.payload;
    },
  },
});

export default expandedCardIdSlice.reducer;
export const { setExpandedCardId } = expandedCardIdSlice.actions;
