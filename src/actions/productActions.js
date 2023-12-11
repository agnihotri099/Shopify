import axiosInstance from "../config";
import {
  PRODUCT_LIST_FAILS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_CATEGORY_FAILS,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS
} from '../constants/productConstant'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axiosInstance.get('/products')
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
    console.log(data)
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILS,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
}

export const detailsProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axiosInstance.get(`/products/${id}`)
    // console.log(data)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const productCategory = (category)=> async(dispatch)=>{
  try {
    dispatch({type: PRODUCT_CATEGORY_REQUEST})
    const data = category;
    console.log(data)
    dispatch({
      type:PRODUCT_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}