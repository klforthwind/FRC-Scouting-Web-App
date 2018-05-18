
function showOwnSwitchTeams() {
    showInfo(man.ownSwitch.data);
}

function showEnemySwitchTeams() {
  showInfo(man.oppSwitch.data);
}

function showScaleTeams() {
  showInfo(man.scale.data);
}

function showVaultTeams() {
  showInfo(man.vault.data);
}

function showClimbTeams() {
  showInfo(man.climb.data);
}

function showInfo(info) {
  document.getElementById("stats").innerHTML = info;
}
