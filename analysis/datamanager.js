class DataManager {
  constructor() {
    // Variable = new DataGroup(Identifiable Name, Category One, Category Two)
    this.own = new DataGroup("Own Switch", "Auton Cubes", "Teleop Cubes");
    this.scale = new DataGroup("Scale", "Auton Cubes", "Teleop Cubes");
    this.opp = new DataGroup("Opponent Switch", "Teleop Cubes");
    this.vault = new DataGroup("Vault", "Cubes");
    this.climb = new DataGroup("Did Climb / Ramped Other Bots", "Climb Count");
  }
  
  addData(id, autonOwn, autonScale, teleOwn, teleOpponent,
        teleScale, teleVault, endClimb) {
          this.ownSwitch.addData(id, autonOwn, teleOwn);
          this.scale.addData(id, autonScale, teleScale);
          this.oppSwitch.addData(id, teleOpponent);
          this.vault.addData(id, teleVault);
          this.climb.addData(id, endClimb);
  }
}
