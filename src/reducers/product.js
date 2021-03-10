import {
  SUGGEST_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_ERROR,
} from "../actions/types";

const initialState = {
  product_suggestions: [],
  products: [],
  product: null,
  loading: true,
  errors: {},
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SUGGEST_PRODUCTS:
      return {
        ...state,
        product_suggestions: payload,
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
        product: payload,
        loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default productReducer;
