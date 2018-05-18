class DataManager {
  constructor() {
    this.data = create2DArray(38, 20);
    this.count = [];
    this.empty();
  }

  addData(id, packetOfData) {
    this.data[id][count[id]] = packetOfData;
  }

  empty() {
    for (let t = 0; t < teamList.length; t++) {
      count[t] = 0;
    }
  }
}

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
