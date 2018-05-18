



// Rows represent number of teams + insurance
// Cols represent number of data entries per team
function create2DArray(rows, cols) {
  return [...Array(rows).keys()].map(i => Array(cols));
}
