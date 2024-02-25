import App from "./App/App";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import { apiUrl, password } from "../utils/consts";
import Pagination from "./Pagination/Pagination";
import {
  getFiftyIds,
  getFields,
  getProducts,
  getAllBrands,
  getFilteredProducts,
} from "../Api/Valantis.-Store";
import {
  fetchIds,
  fetchProducts,
  fetchTableColumns,
  fetchBrands,
  fetchFilteredProducts,
} from "../utils/helpers";

export {
  App,
  Main,
  Header,
  Pagination,
  Loader,
  apiUrl,
  password,
  getFiftyIds,
  getFields,
  getProducts,
  fetchIds,
  fetchProducts,
  fetchTableColumns,
  getAllBrands,
  fetchBrands,
  getFilteredProducts,
  fetchFilteredProducts,
};
