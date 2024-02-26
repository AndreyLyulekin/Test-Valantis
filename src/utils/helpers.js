import {
  getFiftyIds,
  getFields,
  getProducts,
  getAllBrands,
  getFilteredProducts,
} from "../api/Valantis-Store";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import md5 from "blueimp-md5";
import { API_URL, PASSWORD_API } from "./consts";

export const handleEventChange = (event, setter) => {
  setter(event.target.value);
};

export const handleError = (error) => {
  if (error.response) {
    console.log("Id Error:", error.response.data);
    console.log("HTTP Error:", error.response.status);
  } else {
    console.log("Error:", error.message);
  }

  console.log("Retrying...");
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const fetchBrands = async (setter) => {
  const response = await getAllBrands();
  setter(response);
};

export const fetchTableColumns = async (setter) => {
  const response = await getFields();
  setter(response);
};

export const fetchIds = async (setter, page, rowsPerPage) => {
  const response = await getFiftyIds(page, rowsPerPage);
  setter(response);
};

export const fetchProducts = async (
  setter,
  page,
  rowsPerPage,
  setIsLoading,
  idsAfterFilter,
) => {
  setIsLoading(true);
  const response = await getProducts(page, rowsPerPage, idsAfterFilter);
  setter(response);
  setIsLoading(false);
};

export const fetchFilteredProducts = async (
  setter,
  filteredBy,
  filterValue,
) => {
  const response = await getFilteredProducts(filteredBy, filterValue);
  setter(response);
};

export const generateAuthString = (password) => {
  const timestamp = new Date().toISOString().split("T")[0].replace(/-/g, "");
  return md5(`${password}_${timestamp}`);
};

export const executeRequest = async (params) => {
  const headers = {
    "Content-Type": "application/json",
    "X-Auth": generateAuthString(PASSWORD_API),
  };

  let retryCount = 0;
  let result;

  while (retryCount < 3) {
    try {
      result = await axios.post(API_URL, params, { headers });
      break;
    } catch (error) {
      handleError(error);
      retryCount += 1;
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }

  return result?.data?.result || [];
};
