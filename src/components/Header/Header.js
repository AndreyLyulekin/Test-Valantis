import { InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";
import { useState } from "react";

import { FilterByProduct, FilterByPrice, FilterByBrand } from "../index";
import { handleEventChange } from "../../utils/helpers";

export default function Header(props) {
  const {
    allBrandsLists,
    filterByAllState,
    handleClearFilterCLick,
    filterSearchInputValueAllState,
  } = props;
  const [textField, setTextField] = useState("");

  const handleFilterChange = (e) => {
    filterSearchInputValueAllState.setFilterSearchInputValue("");
    handleEventChange(e, filterByAllState.setFilterBy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textField === "") {
      alert("Поле не должно быть пустым");
      return;
    }

    let input = textField;

    !isNaN(input)
      ? filterSearchInputValueAllState.setFilterSearchInputValue(
          parseInt(input),
        )
      : filterSearchInputValueAllState.setFilterSearchInputValue(input);
  };

  return (
    <header className="flex pt-4 lg:pt-0 gap-y-3 lg:gap-0 flex-col lg:flex-row w-full items-center justify-between lg:h-[100px]">
      <h2 className="font-bold text-2xl select-none">LoGo</h2>
      <div className="flex gap-y-3 flex-col lg:flex-row items-center lg:gap-x-5">
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filtered by...
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterByAllState.filterBy}
              label="Filtered by..."
              onChange={(e) => handleFilterChange(e)}
            >
              <MenuItem value={"product"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"brand"}>Brand</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {filterByAllState.filterBy === "product" && (
          <FilterByProduct
            setTextField={setTextField}
            handleSubmit={handleSubmit}
            handleClearFilterCLick={handleClearFilterCLick}
          />
        )}
        {filterByAllState.filterBy === "price" && (
          <FilterByPrice
            setTextField={setTextField}
            handleSubmit={handleSubmit}
            handleClearFilterCLick={handleClearFilterCLick}
          />
        )}
        {filterByAllState.filterBy === "brand" && (
          <FilterByBrand
            handleEventChange={handleEventChange}
            allBrandsLists={allBrandsLists}
            filterSearchInputValueAllState={filterSearchInputValueAllState}
            handleClearFilterCLick={handleClearFilterCLick}
          />
        )}
      </div>
    </header>
  );
}
