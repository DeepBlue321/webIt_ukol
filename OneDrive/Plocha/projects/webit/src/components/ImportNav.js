import { Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

function ImportNav({ handleOnChange, handleOnSubmit }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "1em",
        justifyContent: "end",
      }}
    >
      <form>
        <Button component="label">
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
            hidden
          />
          Najít CSV soubor
        </Button>
        <Button
          variant="contained"
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </Button>
      </form>
    </Box>
  );
}

export default ImportNav;
