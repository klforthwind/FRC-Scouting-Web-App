
var txt = ['ao', 'as', 'to', 'top','ts', 'tv', 'ec'];
var text = ['Auton Own', 'Auton Scale', 'Teleop Own', 'Teleop Opponent', 'Teleop Scale',
'Teleop Vault', 'End Climb'];
var num = [];

function reset() {
  for (let i = 0; i < txt.length; i++) {
    num[i] = 0;
  }
  updateText();
  $('.text').val("");
}

function minus(id) {
  num[txt.indexOf(id)] -= 1;
  updateText();
}

function plus(id) {
  num[txt.indexOf(id)] += 1;
  updateText();
}

function updateText() {
  for (let i = 0; i < txt.length; i++) {
    document.getElementById(txt[i]).innerHTML = text[i] + ': ' + num[i];
  }
}

function submit() {
  let d = new Date();
  let data = {
    loc: getVal('loc'),
    matchNum: Number(getVal('matchNum')),
    teamNum: Number(getVal('teamNum')),
    autonOwn: num[txt.indexOf('ao')],
    autonScale: num[txt.indexOf('as')],
    teleopOwn: num[txt.indexOf('to')],
    teleopOpp: num[txt.indexOf('top')],
    teleopScale: num[txt.indexOf('ts')],
    teleopVault: num[txt.indexOf('tv')],
    endClimb: num[txt.indexOf('ec')],
    autonComments: getVal('autonComments'),
    comments: getVal('comments')
  }
  let ref = database.ref('stats');
  ref.push(data);
  reset();
}

function getVal(id) {
  try {
    return document.getElementById(id).value;
  } catch(err) {
    console.log(err);
    return 0;
  }
}
