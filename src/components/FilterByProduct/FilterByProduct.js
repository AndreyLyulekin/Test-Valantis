import { TextField, Box, Button, Stack } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { ClearFormButton } from "../index";

export default function FilterByProduct({
  handleChange,
  handleSubmit,
  handleClearFilterCLick,
}) {
  return (
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
          onClick={(e) => handleSubmit(e)}
          size="large"
        >
          Filter
        </Button>
        <ClearFormButton handleClearFilterCLick={handleClearFilterCLick} />
      </Stack>
    </>
  );
}
