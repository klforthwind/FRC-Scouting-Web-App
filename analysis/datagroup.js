class DataGroup {

  constructor(id, info1String, info2String) {
    this.name = id;
    this.cat1Name = info1String;
    this.cat1 = create2DArray(40, 15);

    this.twoCats = info2String !== undefined;
    if (this.twoCats) {
      this.cat2Name = info2String;
      this.cat2 = create2DArray(40, 15);
    }
  }

  addData(id, valOne, valTwo) {
    this.cat1[id][count[id]] = valOne;
    this.cat2[id][count[id]] = valTwo;
  }

  addData(id, valOne) {
    this.cat1[id][count[id]] = valOne;
  }

  fillBestTeam() {
    if (this.twoCats) {
      this.data = tr(td("TeamNumber") + td(this.cat1Name) +td(this.cat1Name));
    } else {
      this.data = tr(td("TeamNumber") + td(this.cat1Name));
    }
    this.loopMania();
    this.data = "<table>" + this.data + "</table>";
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

  add(tN, id, score) {
    if (this.twoCats) {
      return tr(td(tN)+td(getAvg(this.cat1, id))+
      td(getAvg(this.cat2, id)));
    } else {
      return tr(td(tN)+td(getAvg(this.cat1, id)));
    }
  }

  getScore(id) {
      var val = getAvg(this.cat1, id);
      val += (this.twoCats) ? getAvg(this.cat2, id) : 0;
      if (val == undefined) {
        return teamList[id];
      } else {
        return val;
      }
  }
}
