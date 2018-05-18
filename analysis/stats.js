

// Rows represent number of teams + insurance
// Cols represent number of data entries per team
function create2DArray(rows, cols) {
  return [...Array(rows).keys()].map(i => Array(cols));
}

function tr(info) {
  return "<tr>"+info+"</tr>";
}

function td(info) {
  return "<td>"+info+"</td>";
}

function r(val) {
	return Math.round(val * 100) / 100;
}
