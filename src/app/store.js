import { configureStore } from "@reduxjs/toolkit"
import balanceReducer from "../features/BalanceSlice"
import postsReducer from "../features/PostSlice"

export const store = configureStore({
  reducer: {
    balance : balanceReducer,
    posts : postsReducer
  },
})
