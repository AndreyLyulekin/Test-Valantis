import { TextField, Box, Button, Stack } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { ClearFormButton } from "../index";
import { handleEventChange } from "../../utils/helpers";

export default function FilterByPrice({
  setTextField,
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
          label="Price"
          variant="outlined"
          color="primary"
          onChange={(e) => handleEventChange(e, setTextField)}
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
