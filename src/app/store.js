import { configureStore } from "@reduxjs/toolkit";
import bookstoreReducer from "../features/bookstore/bookstoreSlice";
export default configureStore({
  reducer: {
    bookstore: bookstoreReducer,
  },
});
