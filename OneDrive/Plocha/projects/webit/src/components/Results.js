import { Input, Button, Typography } from "@mui/material";
import { CSVLink } from "react-csv";
import React from "react";
import { Box } from "@mui/system";

function Results({ count, setHourRate, hourRate }) {
  function exportResult(count, hourRate) {
    return [
      ["Počet hodin", "Korun za hodinu", "Celková částka"],
      [count, hourRate, count * hourRate],
    ];
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        gap: "20px",
        padding: "10px",
      }}
    >
      <Typography>
        {count + " hodin X"}{" "}
        <Input
          sx={{
            width: 50,
          }}
          onChange={(e) => setHourRate(e.target.value)}
        />
        {"Kč/hodinu = "}
        {count * hourRate + "Kč"}
      </Typography>
      <Button color={"secondary"} variant="contained">
        <CSVLink
          style={{ textDecoration: "none", color: "white" }}
          data={exportResult(count, hourRate)}
        >
          Exportovat
        </CSVLink>
      </Button>
    </Box>
  );
}

export default Results;
