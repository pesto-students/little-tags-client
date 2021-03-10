import {
  SUGGEST_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_ERROR,
} from "./types";

export const suggestProducts = (keyword) => async (dispatch) => {
  try {
    const res = product_data.filter((item) => item.name.includes(keyword));

    dispatch({
      type: SUGGEST_PRODUCTS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

var product_data = [
  {
    id: 1,
    name: "Nike shoes",
    category: "shoes",
    thumbnail: "",
  },
  {
    id: 2,
    name: "Highlander shirts",
    category: "shirt",
    thumbnail: "",
  },
  {
    id: 3,
    name: "T-shirts",
    category: "t_shirt",
    thumbnail: "",
  },
  {
    id: 4,
    name: "Highlander jeans",
    category: "jeans",
    thumbnail: "",
  },
  {
    id: 5,
    name: "I phone 12",
    category: "mobile",
    thumbnail: "",
  },
];
