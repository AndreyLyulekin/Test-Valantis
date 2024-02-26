import App from "./App/App";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import { API_URL, PASSWORD_API } from "../utils/consts";
import Pagination from "./Pagination/Pagination";
import ClearFormButton from "./ClearFormButton/ClearFormButton";
import {
  getFiftyIds,
  getFields,
  getProducts,
  getAllBrands,
  getFilteredProducts,
} from "../api/Valantis-Store";
import {
  fetchIds,
  fetchProducts,
  fetchTableColumns,
  fetchBrands,
  fetchFilteredProducts,
  darkTheme,
} from "../utils/helpers";

export {
  App,
  Main,
  Header,
  Pagination,
  Loader,
  API_URL,
  PASSWORD_API,
  getFiftyIds,
  getFields,
  getProducts,
  darkTheme,
  fetchIds,
  fetchProducts,
  fetchTableColumns,
  getAllBrands,
  fetchBrands,
  getFilteredProducts,
  fetchFilteredProducts,
  ClearFormButton,
};
