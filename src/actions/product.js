import {
  SUGGEST_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_CATEGORIES,
  SHOW_LOADING,
} from "./types";

export const suggestProducts = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_LOADING,
      payload: null,
    });
    const res = product_data.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase()) &&
        keyword !== ""
    );
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

export const getProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_LOADING,
      payload: null,
    });
    console.log("fetching product for category", category);
    const res_prom = await fetch("https://fakestoreapi.com/products");
    const res = await res_prom.json();
    console.log(res);
    dispatch({
      type: GET_PRODUCTS,
      payload: res,
    });
  } catch (err) {
    console.log("api error", err);
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProductById = (product_id) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_LOADING,
      payload: null,
    });
    console.log("fetching product for id", product_id);
    const res_prom = await fetch(
      `https://fakestoreapi.com/products/${product_id}`
    );
    const res = await res_prom.json();
    console.log(res);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: res,
    });
  } catch (err) {
    console.log("api error", err);
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

var product_data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "laptops",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    category: "t-shirts",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    category: "jacket",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    category: "t-shirts",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    category: "jacket",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    category: "electronics",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    category: "laptops",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    category: "gold",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    category: "electronics",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    category: "electronics",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    category: "electronics",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    category: "electronics",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    category: "electronics",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    category: "electronics",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    category: "jackets",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    category: "jacket",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    category: "jacket",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    category: "t-shirts",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    category: "t-shirts",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    category: "t-shirts",
  },
  {
    id: 21,
    title: "Jeans for girls",
    category: "jeans",
  },
  {
    id: 22,
    title: "Jeans for mens",
    category: "jeans",
  },
  {
    id: 23,
    title: "Jeans top for girls",
    category: "jeans",
  },
  {
    id: 24,
    title: "Jeans shirt",
    category: "jeans",
  },
  {
    id: 25,
    title: "Jeans jacket",
    category: "jeans",
  },
  {
    id: 26,
    title: "tshirts for men",
    category: "jeans",
  },
  {
    id: 27,
    title: "tshirts for girls",
    category: "jeans",
  },
  {
    id: 28,
    title: "tshirt",
    category: "jeans",
  },
  {
    id: 29,
    title: "tshirts dresses",
    category: "jeans",
  },
  {
    id: 30,
    title: "tshirts for kids",
    category: "jeans",
  },
];
