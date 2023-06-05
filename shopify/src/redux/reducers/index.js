import { combineReducers } from "redux";
import { productsReducer,selectedProductsReducer } from "./productReducer";
// import { configureStore } from '@reduxjs/toolkit'


const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  });
  export default reducers;

