
function showBestSwitchBots() {
    showInfo(man.switch);
}

function showBestScaleBots() {
  showInfo(man.scale.data);
}

function showBestVaultBots() {
  showInfo(man.vault.data);
}

function showBestOverallBots() {
  showInfo(man.overall);
}

function showInfo(info) {
  document.getElementById("stats").innerHTML = info;
}
