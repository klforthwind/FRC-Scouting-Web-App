// Array of Teams
var teamList;
// Array of Data From Keys
var dataList;
// Data Manager
var man;


function gotData() {
  man = new DataManager();
  man.initGroups();
  pullStats(data);

}

function pullStats() {
  var stats = data.val();
  var keys = Object.keys(stats);

  teamList = [];
  dataList = [];

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


function getStats() {
  let ref = database.ref('stats');
  ref.on('value', gotData, errData);
}

// Called by getStats in case things break
function errData(err) {
  console.log('Error Grabbing Data!')
  console.log(err);
}
