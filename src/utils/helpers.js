import {
  getAllBrands,
  getFiftyIds,
  getFields,
  getProducts,
  getFilteredProducts,
} from "../components/index";
import { createTheme } from "@mui/material/styles";

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
