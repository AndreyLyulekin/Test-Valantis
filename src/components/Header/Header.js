import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Box,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";

export default function BasicTextFields({
  allBrandsLists,
  filterBy,
  filterSearchInputValue,
  filterChange,
  handleChangeChooseBrand,
  setFilterSearchInputValue,
  handleClearFilterCLick,
}) {
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
      ? setFilterSearchInputValue(parseInt(input))
      : setFilterSearchInputValue(input);
  };

  return (
    <header className="flex flex-row w-full items-center justify-between h-[100px]">
      <h2 className="font-bold text-2xl select-none">LoGo</h2>
      <div className="flex items-center gap-x-5">
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
          <>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleSubmit(e)}
            >
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                color="primary"
                onChange={handleChange}
              />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<TuneIcon />}
                onClick={handleSubmit}
                size="large"
              >
                Filter
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleClearFilterCLick}
              >
                Clear filter
              </Button>
            </Stack>
          </>
        )}
        {filterBy === "price" && (
          <>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleSubmit(e)}
            >
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                color="primary"
                onChange={handleChange}
              />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<TuneIcon />}
                onClick={handleSubmit}
                size="large"
              >
                Filter
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleClearFilterCLick}
              >
                Clear filter
              </Button>
            </Stack>
          </>
        )}
        {filterBy === "brand" && (
          <Box sx={{ minWidth: "370px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choose Brand
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterSearchInputValue}
                label="Filtered by..."
                onChange={handleChangeChooseBrand}
              >
                {allBrandsLists.map((brand, index) => {
                  return (
                    <MenuItem key={index} value={brand}>
                      {brand}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        )}
      </div>
    </header>
  );
}
