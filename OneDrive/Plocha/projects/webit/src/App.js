import React, { useMemo, useState } from "react";
import TableComponent from "./components/TableComponent";
import ImportNav from "./components/ImportNav";
import Results from "./components/Results";
import { makeArray } from "./lib";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const [hourRate, setHourRate] = useState(1);
  const [hours, setHours] = useState([]);
  const [grid, setGrid] = useState([[]]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  useMemo(() => {
    const sum = hours.reduce((partialSum, a) => partialSum + a, 0);
    setCount(sum);
  }, [hours]);

  const handleChange = (row, value) => {
    const newArray = [...hours];
    newArray[row] = !isNaN(value) ? value : 0;
    setHours(newArray);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    csvHeader.push("jine");
    setGrid(makeArray(csvRows.length, csvHeader.length));
    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, []);
      return obj;
    });
    setHours(new Array(array.length).fill(0));
    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };
      fileReader.readAsText(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ImportNav
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      {array.length ? (
        <TableComponent
          array={array}
          grid={grid}
          setGrid={setGrid}
          hours={hours}
          setHours={setHours}
          handleChange={handleChange}
        />
      ) : (
        <ContentPasteOffIcon sx={{ fontSize: "100px" }} />
      )}

      <Results count={count} setHourRate={setHourRate} hourRate={hourRate} />
    </div>
  );
}

export default App;
