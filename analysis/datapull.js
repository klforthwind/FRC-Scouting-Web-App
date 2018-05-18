// Array of Teams
var teamList;
// Array of Data From Keys
var dataList;
// Data Manager
var man;
// Amount of Data points per team
var count;


function gotData(data) {
  man = new DataManager();
  pullStats(data);
  resetCounts();
  fillInfo();
}

function pullStats(data) {
  var stats = data.val();
  var keys = Object.keys(stats);

  teamList = [];
  dataList = [];
  count = [];

  for (let i = 0; i < keys.length; i++) {
    //Grab a key
    let k = keys[i];

    // Simplify calling stats[k] plenty of times
    let s = stats[k];
    // Get a team number from stats given key
    let tN = s.teamNum;
    if (tN != null) {
      // Triggers if tN is not in the team list yet
      if (teamList.indexOf(tN) == -1) teamList[teamList.length] = tN;

      var data = {
        teamNum: tN,
        matchNum: s.matchNum,
        autonOwn: s.autonOwn,
        autonScale: s.autonScale,
        teleopOwn: s.teleopOwn,
        teleopOpp: s.teleopOpp,
        teleopScale: s.teleopScale,
        teleopVault: s.teleopVault,
        endClimb: s.endClimb,
        autonComments: s.autonComments,
        comments: s.comments
      }
      dataList[dataList.length] = data;
    }

  }
}

// Make data point count 0 for every team
function resetCounts() {
  for (let t = 0; t < teamList.length; t++) {
    count[t] = 0;
  }
}

// Go through every data point and assign it
// to its respective team number
function fillInfo() {
  for (let d = 0; d < dataList.length; d++) {
    try {
      let slotNum = teamList.indexOf(dataList[d].teamNum);
      let s = dataList[d];
      man.addData(slotNum, s.autonOwn, s.autonScale, s.teleopOwn,
         s.teleopOpponent, s.teleopScale, s.teleopVault, s.endClimb);
      count[slotNum]++;
    } catch(err) {

    }
  }
}


function getStats() {
  let ref = database.ref('stats');
  ref.on('value', gotData, errData);
}

// Called by getStats in case things break
function errData(err) {
  console.log('Error Grabbing Data!')
  console.log(err);
}
