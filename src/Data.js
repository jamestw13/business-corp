export class WorldData {
  constructor() {
    this.companyName = ['Acme Corp'];
    this.buildLimit = 4.5;
    this.balance = 5000;
    this.spaces = [new Space(1, 1, 1, 0), new Space(1, -1, 2, 2)];
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
