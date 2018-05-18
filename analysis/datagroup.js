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
}
