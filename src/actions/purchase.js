import {
  API_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./types";

export const addToCart = (product) => async (dispatch) => {
  try {
    // todo!  make api call to add product into cart
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: API_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const removeFromCart = (product) => async (dispatch) => {
  try {
    // todo!  make api call to remove product from cart
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: API_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addToWishlist = (product) => async (dispatch) => {
  try {
    // todo!  make api call to remove product from cart
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: API_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
