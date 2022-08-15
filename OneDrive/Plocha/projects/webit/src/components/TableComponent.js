import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Input,
} from "@mui/material";
import React from "react";

function TableComponent({
  array,
  grid,
  setGrid,
  hours,
  setHours,
  handleChange,
}) {
  function updateUI(row, col) {
    const newArray = grid.map((elm) => {
      return elm;
    });
    newArray[row].forEach((el, index, arr) => {
      if (index === col) {
        arr[index] = true;
      } else {
        arr[index] = false;
      }
    });
    setGrid(newArray);
  }

  const handleClick = (row, col, value) => {
    const newArray = [...hours];
    updateUI(row, col);
    newArray[row] = value;
    setHours(newArray);
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerKeys.map((key) => (
              <TableCell align="right">{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {array.map((item, row) => (
            <tr key={item.id}>
              {Object.values(item).map((value, col) =>
                value ? (
                  <TableCell
                    sx={{
                      backgroundColor: grid[row][col] ? "#1976D2" : "white",
                      color: grid[row][col] ? "white" : "black",
                    }}
                    onClick={() => handleClick(row, col, parseInt(value))}
                    align="right"
                  >
                    {value}
                  </TableCell>
                ) : (
                  <TableCell
                    sx={{
                      backgroundColor: grid[row][col] ? "#1976D2" : "white",
                    }}
                  >
                    <Input
                      onFocus={(event) => {
                        event.target.select();
                      }}
                      sx={{
                        textAlign: "end",
                        width: 50,
                        color: grid[row][col] ? "white" : "black",
                      }}
                      underline={false}
                      disableUnderline
                      defaultValue={0}
                      onClick={() => updateUI(row, col)}
                      onChange={(e) =>
                        handleChange(row, parseInt(e.target.value))
                      }
                    />
                  </TableCell>
                )
              )}
            </tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
