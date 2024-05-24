export class WorldData {
  constructor() {
    this.companyName = ['Acme Corp'];
    this.buildLimit = 4.5;
    this.balance = 5000;
    this.spaces = [new Office(1, 1, 1, 0), new Office(1, -1, 1, 2), new Restroom(-1, 1, 1, 3), new Space(-1, 1, 1, 3)];
  }
}

export class Space {
  constructor(xPos, zPos, floor, rotation = 0) {
    this.position = [xPos, floor - 0.5, zPos];
    this.rotation = rotation;
    this.focus = false;
    this.visible = true;
  }
}

export class Office extends Space {
  constructor(xPos, zPos, floor, rotation = 0) {
    super(xPos, zPos, floor, rotation);
    this.type = 'office';
    this.desk1;

    this.desk2;
    this.desk3;
    this.desk4;
  }
}

export class Restroom extends Space {
  constructor(xPos, zPos, floor, rotation = 0) {
    super(xPos, zPos, floor, rotation);
    this.type = 'restroom';
  }
}
