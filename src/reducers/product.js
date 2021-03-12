import {
  SUGGEST_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_CATEGORIES,
  SHOW_LOADING,
} from "../actions/types";

const initialState = {
  product_suggestions: [],
  products: [],
  product_categories: [],
  product_data: null,
  loading: true,
  errors: {},
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log("action", type);
  switch (type) {
    case SUGGEST_PRODUCTS:
      return {
        ...state,
        product_suggestions: payload,
        loading: false,
      };
    case GET_PRODUCT_CATEGORIES:
      return {
        ...state,
        product_categories: payload,
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        product_data: payload,
        loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default productReducer;
