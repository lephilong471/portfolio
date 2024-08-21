// loginUser.ts
"use client";

import { adminLoginApi } from "@/api/auth/actions";
import { setCookie } from "@/api/session";
import { JWT } from "@/config";
import { makeStore } from "@/state/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./authReducers";

export const loginUser = createAsyncThunk(
   "login/loginUser",
   async (
      body: {
         username: string;
         password: string;
      },
      thunkAPI
   ) => {
      try {
         const response: any = await adminLoginApi({
            username: body.username,
            password: body.password,
         });

         makeStore.dispatch(login(response?.content.token));
         setCookie(JWT, response?.token);
         return response?.token;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
   }
);
