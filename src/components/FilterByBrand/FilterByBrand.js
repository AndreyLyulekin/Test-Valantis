import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Stack,
} from "@mui/material";

import { ClearFormButton } from "../index";

export default function FilterByBrand(props) {
  const {
    handleEventChange,
    allBrandsLists,
    filterSearchInputValueAllState,
    handleClearFilterCLick,
  } = props;

  return (
    <>
      <Box sx={{ minWidth: "370px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterSearchInputValueAllState.filterSearchInputValue}
            label="Filtered by..."
            onChange={(e) =>
              handleEventChange(
                e,
                filterSearchInputValueAllState.setFilterSearchInputValue,
              )
            }
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
      <Stack direction="row" spacing={2}>
        <ClearFormButton handleClearFilterCLick={handleClearFilterCLick} />
      </Stack>
    </>
  );
}
