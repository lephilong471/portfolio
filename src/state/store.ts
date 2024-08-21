import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// export const makeStore = () => {
//    return configureStore({
//       reducer: rootReducer,
//    });
// };

export const makeStore = configureStore({
   reducer: rootReducer,
});
export type AppDispatch = typeof makeStore.dispatch;
