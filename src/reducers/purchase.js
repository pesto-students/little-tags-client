import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_ADDRESS,
  SET_DEFAULT_ADDRESS,
  REMOVE_ADDRESS,
} from "../actions/types";

const initialState = {
  cartItems: [],
  wishlistItems: [],
  defaultAddress: null,
  addresses: [],
};

function purchaseReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== payload.id
        ),
      };
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, payload],
      };
    case REMOVE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter((item) => item.id !== payload.id),
      };
    case SET_DEFAULT_ADDRESS:
      return {
        ...state,
        defaultAddress: payload,
      };
    default:
      return state;
  }
}

export default purchaseReducer;
