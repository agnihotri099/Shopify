import {
  PRODUCT_LIST_FAILS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_FAILS,
} from '../constants/productConstant'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAILS:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action,
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAILS:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const ProductCategoryReducer = (state={cate:""},action) =>{
  switch (action.type) {
    case PRODUCT_CATEGORY_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_CATEGORY_SUCCESS:
      return {loading:false,cate:action.payload};
      case PRODUCT_CATEGORY_FAILS:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}