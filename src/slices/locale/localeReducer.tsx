import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
   name: "language",
   initialState: {
      currentLanguage: "vi", // Đặt tiếng Việt làm mặc định
   },
   reducers: {
      setLanguage: (state, action) => {
         state.currentLanguage = action.payload;
      },
   },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice;
