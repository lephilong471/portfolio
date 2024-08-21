import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
   name: "service",
   initialState: {
      index: -1,
      otherIndex: -1,
   },
   reducers: {
      setIndexService: (state, action) => {
         state.index = action.payload;
      },
      setIndexOtherService: (state, action) => {
         state.otherIndex = action.payload;
      },
   },
});

export const { setIndexService, setIndexOtherService } = serviceSlice.actions;
export default serviceSlice;
