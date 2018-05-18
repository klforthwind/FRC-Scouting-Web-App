class DataManager {
  constructor() {
    // Variable = new DataGroup(Identifiable Name, Category One, Category Two)
    this.own = new DataGroup("Own Switch", "Auton Cubes", "Teleop Cubes");
    this.scale = new DataGroup("Scale", "Auton Cubes", "Teleop Cubes");
    this.opp = new DataGroup("Opponent Switch", "Auton Cubes", "Teleop Cubes");
    this.vault = new DataGroup("Vault", "Cubes");
    this.climb = new DataGroup("Did Climb / Ramped Other Bots", "Climb Count");
  }
}
