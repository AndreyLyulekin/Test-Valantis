import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ClearFormButton({ handleClearFilterCLick }) {
  return (
    <Button
      size="large"
      variant="outlined"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={handleClearFilterCLick}
    >
      Clear filter
    </Button>
  );
}
