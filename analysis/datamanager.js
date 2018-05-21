class DataManager {
  constructor() {
    this.data = create2DArray(38, 20);
    this.count = [];
    this.empty();
  }

  addData(id, packetOfData) {
    this.data[id][count[id]] = packetOfData;
    this.count[id]++;
  }

  empty() {
    for (let t = 0; t < teamList.length; t++) {
      count[t] = 0;
    }
  }

  getSwitchBots(tN) {
    this.data = tr(td("TN") + td("AO") +td("AS") +
    td("TS") + td("TOS") + td("TS")+td("TV")+td("EC"));

    this.loopMania();
    this.data = "<table>" + this.data + "</table>";
    return value;
  }


    loopMania() {
      var exempt = [];
      for(var t = 0; t < teamList.length; t++) {
        var high = 0;
        var bestTeam = 0;
        for (var id = 0; id < teamList.length; id++) {
          if (exempt.indexOf(id) == -1) {
            var score = this.getScore(id);
            if (score >= high) {
              high = score;
              bestTeam = id;
        }}}
        exempt[bestTeam] = bestTeam;
         this.data += this.add(teamList[bestTeam], bestTeam, high);
      }
    }

  // getScore(tN) {
  //   this.data = tr(td("TeamNumber") + td())
  //
  // }

  fillBestTeam() {
    if (this.twoCats) {
      this.data = tr(td("TeamNumber") + td(this.cat1Name) +td(this.cat1Name));
    } else {
      this.data = tr(td("TeamNumber") + td(this.cat1Name));
    }
    this.loopMania();
    this.data = "<table>" + this.data + "</table>";
  }


  add(tN, id, score) {
    if (this.twoCats) {
      return tr(td(tN)+td(getAvg(this.cat1, id))+
      td(getAvg(this.cat2, id)));
    } else {
      return tr(td(tN)+td(getAvg(this.cat1, id)));
    }
  }

  getScore(id) {
      return
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
