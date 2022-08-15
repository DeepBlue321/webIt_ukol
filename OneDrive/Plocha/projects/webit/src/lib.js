export function makeArray(row, col) {
  var arr = [];
  for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < col; j++) {
      arr[i][j] = false;
    }
  }
  return arr;
}
