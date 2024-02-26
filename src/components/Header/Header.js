import { InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";
import { useState } from "react";

import { FilterByProduct, FilterByPrice, FilterByBrand } from "../index";

export default function BasicTextFields(props) {
  const {
    allBrandsLists,
    filterBy,
    filterChange,
    handleChangeChooseBrand,
    handleClearFilterCLick,
    filterSearchInputValueAllState,
  } = props;
  const [textField, setTextField] = useState("");

  const handleChange = (e) => {
    setTextField(e.target.value);
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
              value={filterBy}
              label="Filtered by..."
              onChange={filterChange}
            >
              <MenuItem value={"product"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"brand"}>Brand</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {filterBy === "product" && (
          <FilterByProduct
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClearFilterCLick={handleClearFilterCLick}
          />
        )}
        {filterBy === "price" && (
          <FilterByPrice
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClearFilterCLick={handleClearFilterCLick}
          />
        )}
        {filterBy === "brand" && (
          <FilterByBrand
            handleChangeChooseBrand={handleChangeChooseBrand}
            allBrandsLists={allBrandsLists}
            filterSearchInputValueAllState={filterSearchInputValueAllState}
            handleClearFilterCLick={handleClearFilterCLick}
          />
        )}
      </div>
    </header>
  );
}
