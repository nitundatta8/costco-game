const assets = {
  smile: 1,
  polite: 1,
  smellGood: 1,
  funny: 1,
  DeEscalation: 1,
  friendly: 1,
  weirdLaugh: -1,
  poorSocialSkills: -1,
  alwaysLate: -1,
  noCopingSkills: -1,
}

export class Character {
  constructor(name, type) {
    this.name = name;
    this.seniority = 0;
    this.stressLevel = 0;
    this.timeOff = 0;
    this.type = type;
  }
addAssets() // explain how we are going to use assets
  
//levelUp() {
//  
//}
//
//stressLevel() {
//  
//}
//
//timeOff() {
//  
//}
//
//checkForWin() {
//  
}


export class PizzaCutter extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 2;
    this.stressLevel = 4;

  }
}

export class ChickenCooker extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 1;
    this.stressLevel = 4;
  }
}

export class ProduceStocker extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 4;
    this.stressLevel = 2;
  }
}

export class DoorPerson extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 4;
    this.stressLevel = 3;
  }
}

export class Supervisor extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 5;
  }
}

export class Manager extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 7;
  }
}
