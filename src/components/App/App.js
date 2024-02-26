import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import {
  Header,
  Main,
  fetchProducts,
  fetchTableColumns,
  Loader,
  fetchBrands,
  fetchFilteredProducts,
  darkTheme,
} from "../index";

export default function App() {
  const [allBrandsLists, setAllBrandsLists] = useState([]);
  const [isFieldBrandsChosen, setIsFieldBrandsChosen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [tableColumnsNames, setTableColumnsNames] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterBy, setFilterBy] = useState("");
  const [filterSearchInputValue, setFilterSearchInputValue] = useState("");
  const [productsIdsAfterFilter, setProductsIdsAfterFilter] = useState([]);

  const filterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleChangeChooseBrand = (event) => {
    setFilterSearchInputValue(event.target.value);
  };

  const handleClearFilterCLick = () => {
    setFilterSearchInputValue("");
    setFilterBy("");
    setProductsIdsAfterFilter([]);
  };

  useEffect(() => {
    if (filterBy === "" || filterSearchInputValue === "") return;
    fetchFilteredProducts(
      setProductsIdsAfterFilter,
      filterBy,
      filterSearchInputValue,
    );
  }, [filterBy, filterSearchInputValue]);

  useEffect(() => {
    filterBy === "brand"
      ? setIsFieldBrandsChosen(true)
      : setIsFieldBrandsChosen(false);
  }, [filterBy]);

  useEffect(() => {
    fetchBrands(setAllBrandsLists);
  }, [isFieldBrandsChosen]);

  useEffect(() => {
    fetchTableColumns(setTableColumnsNames);
  }, []);

  useEffect(() => {
    productsIdsAfterFilter.length > 0
      ? fetchProducts(
          setProducts,
          currentPage,
          rowsPerPage,
          setIsLoading,
          productsIdsAfterFilter,
        )
      : fetchProducts(setProducts, currentPage, rowsPerPage, setIsLoading);
  }, [currentPage, productsIdsAfterFilter, rowsPerPage]);

  return (
    <div className="flex-col max-w[1440px] px-4 lg:px-20 relative min-h-screen">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header
          filterBy={filterBy}
          allBrandsLists={allBrandsLists}
          filterSearchInputValueAllState={{
            filterSearchInputValue,
            setFilterSearchInputValue,
          }}
          filterChange={filterChange}
          handleChangeChooseBrand={handleChangeChooseBrand}
          handleClearFilterCLick={handleClearFilterCLick}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <Main
            productsIdsAfterFilter={productsIdsAfterFilter}
            pagesAllState={{ currentPage, setCurrentPage }}
            rowsAllState={{ rowsPerPage, setRowsPerPage }}
            tableColumnsNames={tableColumnsNames}
            products={products}
          />
        )}
      </ThemeProvider>
    </div>
  );
}
