import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "@/api/session";
import { JWT } from "@/config";
// import type { PayloadAction } from "@reduxjs/toolkit";
export interface authState {
   token: string;
}
const initialState: authState = {
   token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      // login: (state, action: PayloadAction<string>) => {
      login: (state, action) => {
         state.token = action.payload;
         localStorage.setItem("token", action.payload);
         setCookie(JWT, action.payload);
      },
   },
});
export const { login } = authSlice.actions;
export default authSlice;
