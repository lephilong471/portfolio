import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/slices/auth/authReducers";
import languageSlice from "@/slices/locale/localeReducer";
import serviceSlice from "@/slices/serviceDuck/serviceReducer";

export const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [languageSlice.name]: languageSlice.reducer,
   [serviceSlice.name]: serviceSlice.reducer,
});
